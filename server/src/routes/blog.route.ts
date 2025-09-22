import express from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import {
  createBlog,
  deleteBlog,
  fetchAllBlogs,
  fetchBlogById,
} from "../controllers/blog.controller.js";
import { upload } from "../middlewares/upload.middlewares.js";
const router = express.Router();

router.get("/", requireAuth, fetchAllBlogs);
router.get("/:id", requireAuth, fetchBlogById);
router.post("/", requireAuth, upload.single("headerImg"), createBlog);
router.delete("/:id", requireAuth, deleteBlog);
export default router;
