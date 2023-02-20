const model = require("./../models");

async function getAllCategory(req, res) {
  try {
    const result = await model.Category.findAll();
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

async function insertCategory(req, res) {
  try {
    const result = await model.Category.create({
      categoryName: req.body.category_name,
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
