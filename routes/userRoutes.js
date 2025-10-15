const express = require("express");
const {
  register,
  login,
  getAllUser,
  uploadProfile,
  updateUser,
  post,
  getAllPost,
  getUserById,
  deletePost,
  getAllPostById,
  updatePost,
  changePassword,
} = require("../controller/userController");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", authenticateToken, getAllUser);
router.post("/img", authenticateToken, uploadProfile);
router.put("/update/:id", authenticateToken, updateUser);
router.post("/post", authenticateToken, post);
router.get("/getPosts", authenticateToken, getAllPost);
router.get("/user/:id", authenticateToken, getUserById);
router.delete('/deletepost/:id',authenticateToken,deletePost);
router.get('/getPosts/:id',authenticateToken,getAllPostById)
router.put('/updatePost/:id',authenticateToken,updatePost);
router.put("/changePassword/:id", authenticateToken, changePassword);

module.exports = router;
