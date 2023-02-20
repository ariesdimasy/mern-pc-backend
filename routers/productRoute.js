const express = require("express");
const router = express.Router();

const controllers = require("../controllers");

router.get("/", controllers.productController.getAllProduct);
router.post("/", controllers.productController.insertProduct);
router.put("/:id", controllers.productController.updateProduct);
router.delete("/:id", controllers.productController.deleteProduct);
router.get("/:id", controllers.productController.productDetail);

module.exports = router;
