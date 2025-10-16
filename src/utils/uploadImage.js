import cloudinary from "@/lib/config/cloudinary";

/**
 * Upload an image buffer to Cloudinary
 * @async
 * @param {File} file - Image file from FormData
 * @param {string} folder - Target folder in Cloudinary
 * @returns {Promise<string>} secure URL of the uploaded image
 */

export async function uploadImageToCloudinary(file, folder) {
  if (!file || folder === "") return null;

  const arrayBuffer = await file.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(buffer);
  });

  return uploadResult.secure_url;
}