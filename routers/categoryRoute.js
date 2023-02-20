const express = require("express");
const router = express.Router();

const controllers = require("./../controllers");

router.get("/", controllers.categoryController.getAllCategory);
router.post("/", controllers.categoryController.insertCategory);
router.put("/:id", controllers.categoryController.updateCategory);
router.delete("/:id", controllers.categoryController.deleteCategory);
router.get("/:id", controllers.categoryController.categoryDetail);

module.exports = router;
