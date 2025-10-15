const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files/usersProfiles");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const filter = (req, file, cb) => {
  const type = ["jpeg", "png", "jpg"];
  const ext = file.originalname.split(".")[1];

  if (type.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Img type must be jpeg, jpg or png"));
  }
};

const usersProfiles = multer({
  storage: storage,
  fileFilter: filter,
  limits: { fileSize: 3 * 1024 * 1024 },
});

module.exports = usersProfiles;
