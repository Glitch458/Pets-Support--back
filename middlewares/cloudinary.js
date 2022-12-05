const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const { Promise } = require("mongoose");

cloudinary.config({
  clooud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = (buffer, path) => {
  return new Promise((resolve, reject) => {
    const cldUuploadSstream = cloudinary.uploader.upload_stream(
      {
        width: 328,
        height: 328,
        format: "png",
        folder: path,
      },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    streamifier.createReadStream(buffer).pipe(cldUuploadSstream);
  });
};

module.exports = uploadImage;

// exports.uploads = (buffer) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(
//       buffer,
//       (result) => {
//         console.log(result);
//         resolve({
//           url: result.url,
//           id: result.public.id,
//         });
//       },
//       {
//         resourse_type: "auto",
//         // folder: folder,
//       }
//     );

// streamifier.createReadStream(buffer).pipe(result);
//   });
// };
