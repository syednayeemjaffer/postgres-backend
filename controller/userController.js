const pool = require("../config/pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, firstname, lastname, ph, password } = req.body;

    if (!email || !firstname || !lastname || !ph || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const emailQuery = "SELECT * FROM users WHERE email = $1";
    const emailResult = await pool.query(emailQuery, [email]);
    console.log("Email", emailResult);
    if (emailResult.rows.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "This email is already used." });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const insertQuery = `
      INSERT INTO users (email, firstname, lastname, ph, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [email, firstname, lastname, ph, hashPassword];
    const result = await pool.query(insertQuery, values);
    console.log("Insert Query:", result);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const userQuery = "SELECT * FROM users WHERE email = $1";
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "First create user account." });
    }

    const user = userResult.rows[0];
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res
        .status(400)
        .json({ success: false, message: "Password is incorrect." });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastName: user.lastName,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("token: ", token);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("ERROR: ", err.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;

    const offset = (page - 1) * limit;

    const result = await pool.query(
      `
  SELECT id, firstname, lastname, email, ph 
  FROM users 
  LIMIT $1 OFFSET $2
`,
      [limit, offset]
    );

    const countResult = await pool.query("SELECT COUNT(*) FROM users");

    return res.status(200).json({
      success: true,
      users: result.rows,
      totalUsers: parseInt(countResult.rows[0].count),
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
