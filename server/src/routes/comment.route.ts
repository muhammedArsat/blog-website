import express from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { createComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/:id", requireAuth, createComment);

export default router;
