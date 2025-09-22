import mongoose, { Schema } from "mongoose";

interface IBlog extends mongoose.Document {
  headerImg: { public_id: string; url: string };
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  images: [
    {
      public_id: string;
      url: string;
    }
  ];
  comments: mongoose.Types.ObjectId[];
}

const blogSchema = new mongoose.Schema<IBlog>(
  {
    headerImg: {
      public_id: { type: String},
      url: { type: String},
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export const Blog = mongoose.model<IBlog>("Blog", blogSchema);
