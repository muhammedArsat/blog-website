import express from "express";
import upload from "../middlewares/upload-middleware.js";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  likeBlog,
  updateBlog,
} from "../controllers/blog-controller.js";
import { verifyToken } from "../middlewares/auth-middleware.js";
const router = express.Router();

router.post("/:id", verifyToken, upload.array("images", 5), createBlog);
router.get("/", verifyToken, getAllBlogs);
router.get("/:id", verifyToken, getSingleBlog);
router.put("/:id", verifyToken,upload.array("images",5), updateBlog);
router.delete("/:id", verifyToken,deleteBlog);

router.put('/:id/:userId',verifyToken,likeBlog);
export default router;
