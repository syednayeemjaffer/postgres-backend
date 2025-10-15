const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files/userPost");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const filter = (req, file, cb) => {
  const allowedTypes = ["jpeg", "png", "jpg"];
  const ext = file.originalname.split(".").pop().toLowerCase();

  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Img type must be jpeg, jpg or png"), false);
  }
};

const userPost = multer({
  storage: storage,
  fileFilter: filter,
  limits: { fileSize: 3 * 1024 * 1024 }, // 1MB
});

module.exports = userPost;
