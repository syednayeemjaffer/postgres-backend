const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));
router.get("/home", (req, res) => res.render("home"));
router.get("/product", (req, res) => res.render("product"));
router.get("/users", (req, res) => res.render("users"));

router.post("/adduser", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:2000/api/register",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      success: false,
      message: "Server error",
      error: error.response?.data || error.message
    });
  }
});

router.post("/userLogin", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:2000/api/login",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      success: false,
      message: "Server error",
      error: error.response?.data || error.message
    });
  }
});

router.get("/usersData", async (req, res) => {
  try {
    const { page, limit } = req.query;
    const response = await axios.get(
      `http://localhost:2000/api/users?page=${page}&limit=${limit}`
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.response?.data || error.message
    });
  }
});

module.exports = router;
