import { Error } from "mongoose";
import cloudinary from "../configs/cloudinary-config.js";
import Blog from "../models/blog-model.js";
import uploadImageToCloudinary from "../utils/upload-image.js";
import winston from "winston/lib/winston/config/index.js";
import logger from "../log/logger.js";

// /api/v1/blogs/:id (POST)
export const createBlog = async (req, res, next) => {
  let uploadResult = [];
  try {
    //condition to check blog contains header image
    if (!req.files || req.files.length === 0) {
      const error = new Error("Header image should be provided");
      error.statusCode = 401;
      throw error;
    }

    if (
      !req.body.heading ||
      !req.body.category ||
      !req.body.content ||
      !req.body.timeToRead
    ) {
      const error = new Error("Missing required fields");
      error.statusCode = 400;
      throw error;
    }

    //uploading image to cloudinary
    uploadResult = await Promise.all(
      req.files.map((file) => uploadImageToCloudinary(file))
    );

    const newBlog = await Blog.create({
      heading: req.body.heading,
      category: req.body.category,
      headerImg: uploadResult.map((img) => ({
        public_id: img.public_id,
        url: img.secure_url,
      })),
      content: req.body.content,
      timeToRead: req.body.timeToRead,
      userId: req.params.id,
    });

    return res.status(201).json({
      success: true,
      message: "New blog posted",
      blog: newBlog,
    });

    //create new blog here
  } catch (err) {
    if (uploadResult.length > 0) {
      uploadResult.map((img) => cloudinary.uploader.destroy(img.public_id));
    }
    next(err);
  }
};

// /api/v1/blogs (GET)
export const getAllBlogs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;
    const total = await Blog.countDocuments();
    const blogs = await Blog.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Blogs fetched",
      data: {
        blogs: blogs,
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    next(err);
  }
};

// /api/v1/blog/:id (GET)
export const getSingleBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      const error = new Error("Blog is not found");
      error.statusCode = 404;
      throw error;
    }

    return res.status(200).json({
      success: true,
      data: {
        blog,
        likes: blog.likes.length,
      },
    });
  } catch (err) {
    next(err);
  }
};

// /api/v1/blog/:id (PUT)
export const updateBlog = async (req, res, next) => {
  let newUploadResult = [];
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      const error = new Error("Blog is not found");
      error.statusCode = 404;
      throw error;
    }

    if (req.body.heading) blog.heading = req.body.heading;
    if (req.body.category) blog.category = req.body.category;
    if (req.body.content) blog.content = req.body.content;
    if (req.body.timeToRead) blog.content = req.body.timeToRead;

    if (req.files && req.files.length > 0) {
      if (blog.headerImg && blog.headerImg.length > 0) {
        await Promise.all(
          blog.headerImg.map((img) =>
            cloudinary.uploader.destroy(img.public_id)
          )
        );
      }

      newUploadResult = await Promise.all(
        req.files.map((file) => uploadImageToCloudinary(file))
      );

      blog.headerImg = newUploadResult.map((img) => ({
        public_id: img.public_id,
        url: img.secure_url,
      }));

      await blog.save();

      return res.status(200).json({
        success: true,
        message: "Blog updated",
        blog,
      });
    }
  } catch (err) {
    if (newUploadResult.length > 0) {
      await Promise.all(
        newUploadResult.map((img) => cloudinary.uploader.destroy(img.public_id))
      );
    }
    next(err);
  }
};

// /api/v1/blogs/:id (DELETE)
export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      const error = new Error("Blog not found");
      error.statusCode = 404;
      throw error;
    }

    await Promise.all(
      blog.headerImg.map((img) => cloudinary.uploader.destroy(img.public_id))
    );

    await blog.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};


// /api/v1/blogs/likes/:id/:userId (PUT)
export const likeBlog = async (req, res, next) => {
  try {
    const { id, userId } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      const error = new Error("Blog is not found");
      error.statusCode = 404;
      throw error;
    }
    let liked = false;
    if (!blog.likes.includes(userId)) {
      blog.likes.push(userId);
      liked = true;
    } else {
      blog.likes = blog.likes.filter((uid) => uid.toString() !== userId);
    }

    await blog.save();

    return res.status(200).json({
      success: true,
      message: liked ? "Blog liked" : "Blog unliked",
      likes: blog.likes.length,
    });
  } catch (err) {
    next(err);
  }
};
