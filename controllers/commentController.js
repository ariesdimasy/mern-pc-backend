const model = require("../models");

async function getAllCommentByProductId(req, res) {
  var status = 200;

  try {
    var product_id = req.params.product_id;
    var page = req.query.page || 1;
    var limit = req.query.page || 10;

    var orderBy = "id";
    var order = "desc";

    var dataCount = await model.Comment.count();
    var pageCount = Math.ceil(dataCount / limit);

    const result = await model.Comment.findAndCountAll({
      where: {
        product_id: product_id,
      },
      order: [[orderBy, order]],
      page: page,
      offset: (page - 1) * limit,
    });

    if (!result) {
      status = 404;
    }

    res.status(status).json({
      message: "Success",
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
      messgae: JSON.stringify(err),
    });
  }
}

async function createComment(req, res) {
  try {
    const product_id = req.body.product_id;
    const user_id = req.body.user_id;
    const comment = req.body.comment;
    const created_at = new Date();
    const updated_at = new Date();

    const result = await model.Comment.create({
      productId: product_id,
      userId: user_id,
      comment,
      createdAt: created_at,
      updatedAt: updated_at,
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

async function updateComment(req, res) {
  try {
    const id = req.params.id;

    const comment = req.body.comment;
    const updated_at = new Date();

    const result = await model.Comment.update(
      {
        comment,
        updatedAt: updated_at,
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

async function deleteComment(req, res) {
  try {
    const id = req.params.id;

    const result = await model.Comment.destroy({
      where: {
        id: id,
      },
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

module.exports = {
  getAllCommentByProductId,
  createComment,
  updateComment,
  deleteComment,
};
