const model = require("./../models");
const { Op } = require("sequelize");
const md5 = require("md5");

async function getAllUser(req, res) {
  try {
    var query = undefined;
    var page = req.query.page || 1;
    var limit = req.query.limit || 10;
    var order = req.query.order || "ASC";
    var orderBy = req.query.orderBy || "id";
    var searchQuery = req.query.search?.toLowerCase();

    if (searchQuery) {
      query = {
        where: {
          name: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      };
    }

    var dataCount = await model.User.count({ query });
    var pageCount = Math.ceil(dataCount / limit);

    const result = await model.User.findAndCountAll({
      query,
      order: [[orderBy, order]],
      limit: limit,
      offset: (page - 1) * limit,
      attributes: ["id", "name", "email", "status", "authorization"],
    });

    res.status(200).json({
      message: "success",
      pagination: {
        page,
        limit,
        pageCount,
        dataCount,
      },
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

async function userDetail(req, res) {
  var status = 200;

  try {
    const id = req.params.id;
    const result = await model.User.findOne({
      where: {
        id: id,
      },
      attributes: ["id", "name", "email", "status", "authorization"],
    });

    if (!result) {
      status = 404;
    }

    res.status(status).json({
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      data: JSON.stringify(err),
    });
  }
}

async function register(req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const password_again = req.body.password_again;
    const status = req.body.status;
    const authorization = req.body.authorization;

    if (authorization === "member") {
      if (password !== password_again) {
        res.status(400).json({
          message: "your password and password_again must same",
        });
        return false;
      }
    }

    const result = await model.User.create({
      name,
      email,
      password: md5(password),
      status,
      authorization,
    });

    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

async function updateUser(req, res) {
  try {
    const id = req.params.id;

    const name = req.body.name;
    const email = req.body.email;
    const status = req.body.status;
    const authorization = req.body.authorization;

    const result = await model.User.update(
      {
        name,
        email,
        status,
        authorization,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

async function deleteUser(req, res) {
  var status = 200;
  try {
    const id = req.params.id;

    const result = await model.User.destroy({
      where: {
        id: id,
      },
    });

    if (!result) {
      status = 404;
    }

    res.status(status).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    res.status.json({
      message: JSON.stringify(err),
    });
  }
}

module.exports = {
  getAllUser,
  userDetail,
  register,
  updateUser,
  deleteUser,
};
