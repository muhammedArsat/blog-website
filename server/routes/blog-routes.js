import express from "express";
import upload from "../middlewares/upload-middleware.js";
import { createBlog, deleteBlog } from "../controllers/blog-controller.js";
const router = express.Router();

router.post("/", upload.array("images", 5), createBlog);

router.delete("/:id", deleteBlog);

export default router;
