const express = require("express");
const router = express.Router();
const multer = require("multer");
const { verifyToken } = require("../library/tokenLib");
const path = require("path");
const defineAbility = require("./../library/defineAbility");
const checkAuthorization = require("./../library/checkAuthorization");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public/products"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.originalname.split(".")[0] + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const controllers = require("../controllers");

router.get("/", controllers.productController.getAllProduct);
router.post(
  "/",
  verifyToken,
  upload.single("product_image"),
  (req, res, next) => {
    const userAuthorization = req.session.profile.authorization; // role
    checkAuthorization(
      defineAbility(userAuthorization).can("create", "Product"),
      next
    );
  },
  controllers.productController.insertProduct
);
router.put(
  "/:id",
  verifyToken,
  (req, res, next) => {
    const userAuthorization = req.session.profile.authorization; // role
    checkAuthorization(
      defineAbility(userAuthorization).can("update", "Product"),
      next
    );
  },
  controllers.productController.updateProduct
);
router.delete(
  "/:id",
  verifyToken,
  (req, res, next) => {
    const userAuthorization = req.session.profile.authorization; // role
    checkAuthorization(
      defineAbility(userAuthorization).can("delete", "Product"),
      next
    );
  },
  controllers.productController.deleteProduct
);
router.get("/:id", controllers.productController.productDetail);

module.exports = router;
