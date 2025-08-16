import cloudinary from "../configs/cloudinary-config.js";
import Blog from "../models/blog-model.js";
import uploadImageToCloudinary from "../utils/upload-image.js";

export const createBlog = async (req, res, next) => {
  try {
    //condition to check blog contains header image
    if (!req.files || req.files.length === 0) {
      const error = new Error("Header image should be provided");
      error.statusCode = 401;
      throw error;
    }

    //uploading image to cloudinary
    const uploadResult = await Promise.all(
      req.files.map((file) => uploadImageToCloudinary(file))
    );

    //create new blog here
  } catch (err) {
    next(err);
  }
};

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
      blog.images.map((img) => cloudinary.uploader.destroy(img.public_id))
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
