import { CustomError } from "../middlewares/error.middleware.js";
import { Blog } from "../models/blog.model.js";
import { Comment } from "../models/comment.model.js";
import { Request, Response, NextFunction } from "express";

interface AuthHeader extends Request {
  user?: any;
}
//@desc create a comment
//@route POST /api/v1/comments/:id
//@access PROTECTED
export const createComment = async (
  req: AuthHeader,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const blog = await Blog.findById(id);
    if (!blog) {
      const err: CustomError = new Error("Blog is not found");
      err.statusCode = 404;
      throw err;
    }
    const newComment = await Comment.create({
      blogId:id,
      authorId: req.user.userId,
      comment,
    });

     blog.comments.push(newComment._id);
    await blog.save();
    return res.status(200).json({
        success:true,
        message:"Comment created successfully",
    })
  } catch (err) {
    next(err);
  }
};
