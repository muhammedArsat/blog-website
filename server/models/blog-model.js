import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Heading is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    headerImg: {
      type: String,
      required: [true, "Header image is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    timeToRead: {
      type: String,
      required: [true, "Time to read is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
