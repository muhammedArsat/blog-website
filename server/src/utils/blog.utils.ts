import* as cheerio from "cheerio";
import cloudinary from "../configs/cloudinary.config.js";
import { upload } from "../middlewares/upload.middlewares.js";

export const uploadBlogImage = async (htmlContent: string) => {
  const $ = cheerio.load(htmlContent);
  const images = $("img");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    let src = $(img).attr("src");
    if (!src) continue;

    let uploadResult;

    if (src.startsWith("http")) {
      uploadResult = await cloudinary.uploader.upload(src, {
        folder: "blog-website",
        quality: "auto:good",
      });
    } else {
      uploadResult = await cloudinary.uploader.upload(src, {
        folder: "blog-website",
        quality: "auto:good",
      });
    }
    $(img).attr("src", uploadResult.url);
  }
  return $.html();
};


export const deleteBlogImage = async (htmlContent: string) => {
  const $ = cheerio.load(htmlContent);
  const images = $("img");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const src = $(img).attr("src");

    if (!src) continue;

    // Only delete if it's a Cloudinary URL
    if (src.includes("res.cloudinary.com")) {
      // Extract public_id from the URL
      // Example URL:
      // https://res.cloudinary.com/demo/image/upload/v1234567890/blog-website/abc123.jpg
      const parts = src.split("/");
      const fileWithExt = parts[parts.length - 1]; // "abc123.jpg"
      const folder = parts[parts.length - 2]; // "blog-website"
      const publicId = `${folder}/${fileWithExt?.split(".")[0]}`;

      try {
        await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
        console.log(`Deleted: ${publicId}`);
      } catch (err) {
        console.error(`Failed to delete ${publicId}`, err);
      }
    }
  }
};

