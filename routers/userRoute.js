const express = require("express");
const router = express.Router();

const userController = require("./../controllers/userController");

router.get("/", userController.getAllUser);
router.get("/:id", userController.userDetail);
router.post("/", userController.register);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
