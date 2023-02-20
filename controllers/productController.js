const model = require("./../models");
const { Op } = require("sequelize");

async function getAllProduct(req, res) {
  try {
    var query = undefined;
    var order = req.query.order?.toUpperCase() || "ASC";
    var orderBy = req.query.orderBy || "id";

    var page = req.query.page || 1;
    var limit = req.query.limit || 10;

    const searchQuery = req.query.search?.toLowerCase();

    if (searchQuery) {
      query = {
        where: {
          productName: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      };
    }

    var dataCount = await model.Product.count({ query });
    var pageCount = Math.ceil(dataCount / limit);

    const result = await model.Product.findAndCountAll({
      query,
      order: [[orderBy, order]],
      include: { model: model.Category, attributes: ["id", "categoryName"] },
      attributes: ["id", "productName", "price", "description", "userId"],
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

async function insertProduct(req, res) {
  try {
    const result = await model.Product.create({
      productName: req.body.product_name,
      price: req.body.price,
      description: req.body.description,
      categoryId: req.body.category_id,
      userId: req.body.user_id,
    });

    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    var status = err.errors?.length > 1 ? 400 : 500;

    res.status(status).json({
      message: Array.isArray(err.errors)
        ? err.errors.map((item) => {
            return item.message;
          })
        : JSON.stringify(err),
    });
  }
}

async function updateProduct(req, res) {
  try {
    const { product_name, price, description, category_id, user_id } = req.body;

    const result = await model.Product.update(
      {
        productName: product_name,
        price: price,
        description: description,
        categoryId: category_id,
        userId: user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    var status = err.errors?.length > 1 ? 400 : 500;

    res.status(status).json({
      message: Array.isArray(err.errors)
        ? err.errors.map((item) => {
            return item.message;
          })
        : JSON.stringify(err),
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const result = await model.Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    var status = err.errors?.length > 1 ? 400 : 500;

    res.status(status).json({
      message: Array.isArray(err.errors)
        ? err.errors.map((item) => {
            return item.message;
          })
        : JSON.stringify(err),
    });
  }
}

async function productDetail(req, res) {
  var status = 200;
  try {
    const result = await model.Product.findByPk(req.params.id, {
      include: { model: model.Category, attributes: ["id", "categoryName"] },
      attributes: ["id", "productName", "price", "description", "userId"],
    });

    if (result == null) {
      status = 404;
    }

    res.status(status).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    status = err.errors?.length > 1 ? 400 : 500;

    res.status(status).json({
      message: Array.isArray(err.errors)
        ? err.errors.map((item) => {
            return item.message;
          })
        : JSON.stringify(err),
    });
  }
}

module.exports = {
  getAllProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
  productDetail,
};
