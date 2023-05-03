const express = require("express");
const router = express.Router();
const { verifyToken } = require("../library/tokenLib");

const userController = require("./../controllers/userController");

router.get("/", userController.getAllUser);
router.get("/check-token", userController.checkToken);
router.get("/:id", userController.userDetail);
router.post("/register", userController.register);
router.put("/:id", verifyToken, userController.updateUser);
router.delete("/:id", verifyToken, userController.deleteUser);
router.post("/login", userController.login);

module.exports = router;
