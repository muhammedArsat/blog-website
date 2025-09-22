import mongoose, { Schema, Types } from "mongoose";

interface IComment {
  authorId: mongoose.Types.ObjectId;
  blogId: mongoose.Types.ObjectId;
  comment: string;
}

const CommentSchema = new mongoose.Schema<IComment>(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    comment: String,
  },
  { timestamps: true }
);

export const Comment = mongoose.model<IComment>("Comment", CommentSchema);
