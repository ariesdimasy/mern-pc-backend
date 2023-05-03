const express = require("express");
const { verifyToken } = require("../library/tokenLib");
const router = express.Router();

const commentController = require("./../controllers/commentController");

router.get("/:product_id", commentController.getAllCommentByProductId);
router.post("/", verifyToken, commentController.createComment);
router.put("/:id", verifyToken, commentController.updateComment);
router.delete("/:id", verifyToken, commentController.deleteComment);

module.exports = router;
