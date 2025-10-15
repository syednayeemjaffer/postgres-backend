const multer = require("multer");

// ---------------------
// Memory storage for post images
// ---------------------
const storage = multer.memoryStorage();

const filter = (req, file, cb) => {
  const allowedTypes = ["jpeg", "jpg", "png"];
  const ext = file.originalname.split(".").pop().toLowerCase();

  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Img type must be jpeg, jpg or png"), false);
  }
};

const uploadPost = multer({
  storage,
  fileFilter: filter,
  limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
});

module.exports = uploadPost;
