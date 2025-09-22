import { Request, Response, NextFunction } from "express";
import { CustomError } from "../middlewares/error.middleware.js";
import { Blog } from "../models/blog.model.js";
import cloudinary, { uploadImage } from "../configs/cloudinary.config.js";
import { deleteBlogImage, uploadBlogImage } from "../utils/blog.utils.js";

interface AuthHeader extends Request {
  user?: any;
}

//@desc fetch all blogs
//@route GET /api/v1/blogs?limit=10&page=1
//@access PROTECTED
export const fetchAllBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string);
    const limit = parseInt(req.query.limit as string);
    const skip = (page - 1) * limit;

    const blogs = await Blog.find().skip(skip).limit(limit);
    const total = await Blog.countDocuments();

    return res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: [
        {
          page,
          limit,
          blogs,
          totalPages: Math.ceil(total / limit),
          totalBlog: total,
        },
      ],
    });
  } catch (err) {
    next(err);
  }
};

//@desc fetch blog by Id
//@route GET /api/v1/blogs/:id
//@access
export const fetchBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate("comments");
    if (!blog) {
      const err: CustomError = new Error("Blog is not found");
      err.statusCode = 404;
      throw err;
    }

    return res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: [
        {
          blog,
          blogComments: blog.comments.length,
        },
      ],
    });
  } catch (err) {
    next(err);
  }
};

//@desc create new blog
//@route POST /api/v1/blogs
//@access PROTECTED
export const createBlog = async (
  req: AuthHeader,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;
    console.log(req.file);
    //uploading header images
    let headerImg = { public_id: "", url: "" };
    if (req.file) {
      headerImg = await uploadImage(req.file.buffer, req.file.mimetype);
    } else {
      const err: CustomError = new Error("Header image is required");
      err.statusCode = 400;
      throw err;
    }

    //uploading images inside the blogs
    const updatedContent = await uploadBlogImage(content);

    const blog = await Blog.create({
      headerImg,
      title,
      content: updatedContent,
      author: req.user?.userId,
      comments: [],
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: [
        {
          blog,
        },
      ],
    });
  } catch (err) {
    next(err);
  }
};

//@desc update existing blog
//@route PUT /api/v1/blogs
//@access PROTECTED
// export const updateBlog = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const {id}
//     const { title, content } = req.body;
//     let headerImg = {
//       publicId: "",
//       url: "",
//     };
//     if (req.file) {

//     }
//   } catch (err) {
//     next(err);
//   }
// };

//@desc delete a blog
//@route DELETE /api/v1/blogs
//@access PROTECTED
export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      const error: CustomError = new Error("Blog is not found");
      error.statusCode = 404;
      throw error;
    }
    await cloudinary.uploader.destroy(blog.headerImg.public_id);
    deleteBlogImage(blog.content);

    await Blog.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
