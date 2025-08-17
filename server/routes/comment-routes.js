import express from "express";
import { verifyToken } from "../middlewares/auth-middleware.js";
import {
  createComment,
  getCommentForBlog,
  updateCommentById,
  deleteComment,
} from "../controllers/comment-controller.js";

const router = express.Router();

router.post("/", verifyToken, createComment);
router.get("/:id", verifyToken, getCommentForBlog);
router.put("/:id", verifyToken, updateCommentById);
router.delete("/:id", verifyToken, deleteComment);

export default router;
