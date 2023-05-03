const express = require("express");
const { verifyToken } = require("../library/tokenLib");
const router = express.Router();
const path = require("path");
const defineAbility = require("./../library/defineAbility");
const checkAuthorization = require("./../library/checkAuthorization");

const controllers = require("./../controllers");

router.get("/", controllers.categoryController.getAllCategory);
router.post(
  "/",
  verifyToken,
  (req, res, next) => {
    const userAuthorization = req.session.profile.authorization; // role
    checkAuthorization(
      defineAbility(userAuthorization).can("update", "Category"),
      next()
    );
  },
  controllers.categoryController.insertCategory
);
router.put(
  "/:id",
  verifyToken,
  (req, res, next) => {
    const userAuthorization = req.session.profile.authorization; // role
    checkAuthorization(
      defineAbility(userAuthorization).can("update", "Category"),
      next()
    );
  },
  controllers.categoryController.updateCategory
);
router.delete(
  "/:id",
  verifyToken,
  (req, res, next) => {
    const userAuthorization = req.session.profile.authorization; // role
    checkAuthorization(
      defineAbility(userAuthorization).can("update", "Category"),
      next()
    );
  },
  controllers.categoryController.deleteCategory
);
router.get("/:id", controllers.categoryController.categoryDetail);

module.exports = router;
