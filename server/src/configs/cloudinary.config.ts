import { v2 as cloudinary } from "cloudinary";
//import { buffer } from "stream/consumers";
import { CustomError } from "../middlewares/error.middleware.js";
import { CLOUD_API_KEY, CLOUD_NAME, CLOUDINARY_API_SECRET } from "./Env.js";

if (!CLOUD_NAME || !CLOUD_API_KEY || !CLOUDINARY_API_SECRET) {
  const error: CustomError = new Error(
    "Cloudinary configuration variables are missing"
  );
  error.statusCode = 500;
  throw error;
}
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploadImage = async (buffer: Buffer, mimetype: string) => {
  try {
    const base64 = buffer.toString("base64");
    const dataUri = `data:${mimetype};base64,${base64}`;
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "blog-website",
      quality: "auto:good",
    });
    return { public_id: result.public_id, url: result.url };
  } catch (err) {
    const error: CustomError = new Error();
    error.statusCode = 401;
    throw error;
  }
};

export default cloudinary;
