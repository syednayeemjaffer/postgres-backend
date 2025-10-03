const express = require("express");
const {
  register,
  login,
  getAllUser,
  uploadProfile,
  updateUser,
} = require("../controller/userController");
const {authenticateToken} = require('../middleware/auth');
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users",authenticateToken, getAllUser);
router.post("/img",authenticateToken, uploadProfile);
router.put("/update/:id",authenticateToken,updateUser)
module.exports = router;
