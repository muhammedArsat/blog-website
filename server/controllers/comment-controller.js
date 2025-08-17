import { compare } from "bcryptjs";
import Blog from "../models/blog-model.js";
import Comment from "../models/comment-model.js";

// /api/v1/comments/:id/:uid (POST)
export const createComment = async (req, res, next) => {
  try {
    const { id, uid } = req.body;
    const blog = await Blog.findById(id);

    if (!blog) {
      const error = new Error("Blog not found");
      error.statusCode = 404;
      throw error;
    }

    await Comment.create({
      comment: req.body.comment,
      blogId: id,
      userId: uid,
    });

    return res.status(201).json({
      success: true,
      message: "Comment added successfully",
    });
  } catch (err) {
    next(err);
  }
};

// /api/v1/comments/:id (GET)
export const getCommentForBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      const error = new Error("Blog not found");
      error.statusCode = 404;
      throw error;
    }

    const comments = await Comment.find({ blogId: id });

    return res.status(200).json({
      success: true,
      message: "Comments fetched",
      data: {
        comments,
        commentCount: comments.length,
      },
    });
  } catch (err) {
    next(err);
  }
};

// /api/v1/comments/:id (PUT)
export const updateCommentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id);
    if (!comment) {
      const error = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }

    comment.comment = req.body.comment;

    await comment.save();

    return res.status(200).json({
      success: true,
      message: "Comment updated",
      comment,
    });
  } catch (err) {
    next(err);
  }
};


// /api/v1/comments/:id (DELETE)
export const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
      const error = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }

    await comment.deleteOne();
    return res.status(200).json({
      success: true,
      message: "Comment deleted",
      comment,
    });
  } catch (err) {
    next(err);
  }
};
