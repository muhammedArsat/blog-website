import cloudinary from "../configs/cloudinary-config.js";

const uploadImageToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blog_images" },
      (error, uploaded) => {
        if (error) reject(error);
        else resolve(uploaded);
      }
    );
    stream.end(fileBuffer.buffer);
  });
};

export default uploadImageToCloudinary;
