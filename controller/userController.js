const pool = require("../config/pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, firstName, lastName, ph, password } = req.body;

    if (!email || !firstName || !lastName || !ph || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const emailQuery = "SELECT * FROM users WHERE email = $1";
    const emailResult = await pool.query(emailQuery, [email]);

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
    

    const values = [email, firstName, lastName, ph, hashPassword];
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
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

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
