const model = require("./../models");
const { Op } = require("sequelize");

async function getAllCategory(req, res) {
  try {
    var where = undefined;
    var order = req.query.order?.toUpperCase() || "ASC";
    var orderBy = req.query.orderBy || "id";

    var page = req.query.page || 1;
    var limit = Number(req.query.limit) || 10;

    const searchQuery = req.query.search?.toLowerCase();
    if (searchQuery) {
      where = {
        categoryName: {
          [Op.like]: `%${searchQuery}%`,
        },
      };
    }

    var dataCount = await model.Category.count({
      where: where,
    });

    var pageCount = Math.ceil(dataCount / limit);

    const result = await model.Category.findAndCountAll({
      where: where,
      order: [[orderBy, order]],
      attributes: ["id", "categoryName"],
      limit: limit,
      offset: (page - 1) * limit,
    });

    res.status(200).json({
      message: "success",
      pagination: {
        page: page,
        pageCount: pageCount,
        dataCount: dataCount,
        limit: limit,
      },
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

async function insertCategory(req, res) {
  try {
    const result = await model.Category.create({
      categoryName: req.body.category_name,
    });

    res.status(200).json({
      message: "success",
      type: "add",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

async function updateCategory(req, res) {
  try {
    const result = await model.Category.update(
      {
        categoryName: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      message: "success",
      type: "update",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

async function deleteCategory(req, res) {
  try {
    const result = await model.Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: "success",
      type: "delete",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

async function categoryDetail(req, res) {
  try {
    const result = await model.Category.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: "success",
      type: "detail",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: JSON.stringify(err),
    });
  }
}

module.exports = {
  getAllCategory,
  insertCategory,
  updateCategory,
  deleteCategory,
  categoryDetail,
};
