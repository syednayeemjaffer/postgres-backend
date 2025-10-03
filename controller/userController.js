const pool = require("../config/pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usersProfiles = require("../config/userProfile");
const validator = require("validator");
const fs = require("fs");
const path = require("path");

exports.uploadProfile = (req, res) => {
  const uploadFunc = usersProfiles.single("profile");

  uploadFunc(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          success: false,
          message: "File size should be less than 3MB",
        });
      }

      if (err.message === "Img type must be jpeg, jpg or png") {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Server error",
        error: err.message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Profile image is required",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile image uploaded successfully",
      file: req.file,
    });
  });
};

exports.register = async (req, res) => {
  try {
    const uploadFunc = usersProfiles.single("profile");

    uploadFunc(req, res, async (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            success: false,
            message: "File size should be less than 3MB",
          });
        }
        if (err.message === "Img type must be jpeg, jpg or png") {
          return res.status(400).json({
            success: false,
            message: err.message,
          });
        }
        return res.status(500).json({
          success: false,
          message: "Server error",
          error: err.message,
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Profile image is required",
        });
      }

      const { email, firstname, lastname, ph, password } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "email is required",
        });
      }

      if (!firstname) {
        return res.status(400).json({
          success: false,
          message: "First name is required.",
        });
      }

      if (!lastname) {
        return res.status(400).json({
          success: false,
          message: "Lastname is required.",
        });
      }

      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Password is required.",
        });
      }

      if (!ph) {
        return res.status(400).json({
          success: false,
          message: "Ph is required.",
        });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Email is invalid.",
        });
      }
      const passwordregex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^\s]{6,20}$/;

      if (!passwordregex.test(password)) {
        return res.status(400).json({
          status: false,
          message:
            "Password must has 1 caps letter & 1 small letter & 1 number & 1 special character & atleast 6 letters & max 20 letters & no whitespace",
        });
      }

      const nameregex = /^[A-Za-zs]+$/;

      if (
        firstname.length < 3 ||
        firstname.length > 30 ||
        !nameregex.test(firstname)
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Firstname must contain only letters and be 3-20 characters.",
        });
      }

      if (
        lastname.length < 1 ||
        lastname.length > 20 ||
        !nameregex.test(lastname)
      ) {
        return res.status(400).json({
          success: false,
          message: "Lastname must contain only letters and be 1-20 characters.",
        });
      }

      const emailResult = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      if (emailResult.rows.length > 0) {
        return res
          .status(400)
          .json({ success: false, message: "Email is already used." });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const insertQuery = `
        INSERT INTO users (profile, email, firstname, lastname, ph, password)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;
      const values = [
        req.file.filename,
        email,
        firstname,
        lastname,
        ph,
        hashPassword,
      ];
      const result = await pool.query(insertQuery, values);

      return res.status(201).json({
        success: true,
        message: "User created successfully",
        user: result.rows[0],
      });
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
        lastName: user.lastname,
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

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const uploadFunc = usersProfiles.single("profile");

    uploadFunc(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      const { firstname, lastname, email, ph, password } = req.body;
      let profileImage = null;

      
      if (req.file) {
        profileImage = req.file.filename;

        const oldProfileQuery = await pool.query(
          "SELECT profile FROM users WHERE id = $1",
          [userId]
        );
        const oldProfile = oldProfileQuery.rows[0]?.profile;

        if (oldProfile) {
          const oldPath = path.join(
            __dirname,
            "..",
            "files",
            "usersProfiles",
            oldProfile
          );
          fs.access(oldPath, fs.constants.F_OK, (err) => {
            if (!err) {
              fs.unlink(oldPath, (err) => {
                if (err) console.error("Error deleting old profile:", err);
                else console.log("Old profile image deleted:", oldProfile);
              });
            }
          });
        }
      }

      let fields = [];
      let values = [];
      let index = 1;

      if (firstname) {
        fields.push(`firstname = $${index++}`);
        values.push(firstname);
      }
      if (lastname) {
        fields.push(`lastname = $${index++}`);
        values.push(lastname);
      }
      if (email) {
        if (!validator.isEmail(email)) {
          return res.status(400).json({
            success: false,
            message: "Invalid email",
          });
        }

        const existingEmail = await pool.query(
          "SELECT * FROM users WHERE email = $1 AND id != $2",
          [email, userId]
        );
        if (existingEmail.rows.length > 0) {
          return res
            .status(400)
            .json({ success: false, message: "Email already in use." });
        }

        fields.push(`email = $${index++}`);
        values.push(email);
      }
      if (ph) {
        fields.push(`ph = $${index++}`);
        values.push(ph);
      }
      if (password) {
        const passwordregex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^\s]{6,20}$/;

        if (!passwordregex.test(password)) {
          return res.status(400).json({
            status: false,
            message:
              "Password must have 1 uppercase, 1 lowercase, 1 number, 1 special character, 6-20 chars, no space",
          });
        }

        const hashedPass = await bcrypt.hash(password, 10);
        fields.push(`password = $${index++}`);
        values.push(hashedPass);
      }

      if (profileImage) {
        fields.push(`profile = $${index++}`);
        values.push(profileImage);
      }

      if (fields.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No fields provided to update",
        });
      }

      const updateQuery = `
        UPDATE users
        SET ${fields.join(", ")}
        WHERE id = $${index}
        RETURNING *;
      `;
      values.push(userId);

      const result = await pool.query(updateQuery, values);

      if (result.rows.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      return res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: result.rows[0],
      });
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
