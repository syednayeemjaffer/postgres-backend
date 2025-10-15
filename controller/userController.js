const pool = require("../config/pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usersProfiles = require("../config/userProfile");
const uploadPost = require("../config/userPost");
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
            status: false,
            message: "File size should be less than 3MB",
          });
        }
        if (err.message === "Img type must be jpeg, jpg or png") {
          return res.status(400).json({
            status: false,
            message: err.message,
          });
        }
        return res.status(500).json({
          status: false,
          message: "Server error",
          error: err.message,
        });
      }

      if (!req.file) {
        return res.status(400).json({
          status: false,
          message: "Profile image is required",
        });
      }

      const { email, firstname, lastname, ph, password } = req.body;

      if (!email) {
        return res.status(400).json({
          status: false,
          message: "email is required",
        });
      }

      if (!firstname) {
        return res.status(400).json({
          status: false,
          message: "First name is required.",
        });
      }

      if (!lastname) {
        return res.status(400).json({
          status: false,
          message: "Lastname is required.",
        });
      }

      if (!password) {
        return res.status(400).json({
          status: false,
          message: "Password is required.",
        });
      }

      if (!ph) {
        return res.status(400).json({
          status: false,
          message: "Ph is required.",
        });
      }

      if (email.length > 250) {
        return res.status(400).json({
          status: false,
          message: "Email is to long.",
        });
      }
      if (!validator.isEmail(email)) {
        return res.status(400).json({
          status: false,
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

      const nameregex = /^[A-Za-z]+$/;

      if (
        firstname.length < 3 ||
        firstname.length > 30 ||
        !nameregex.test(firstname)
      ) {
        return res.status(400).json({
          status: false,
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
          status: false,
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
          .json({ status: false, message: "Email is already used." });
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
        status: true,
        message: "User created successfully",
        user: result.rows[0],
      });
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      status: false,
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
        .json({ status: false, message: "All fields are required" });
    }

    if (email.length > 50) {
      return res
        .status(400)
        .json({ status: false, message: "Email length is more the 50" });
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

    const userQuery = "SELECT * FROM users WHERE email = $1";
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res
        .status(400)
        .json({ status: false, message: "First create user account." });
    }

    const user = userResult.rows[0];
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res
        .status(400)
        .json({ status: false, message: "Password is incorrect." });
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
      status: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("ERROR: ", err.message);
    return res.status(500).json({
      status: false,
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
      status: true,
      users: result.rows,
      totalUsers: parseInt(countResult.rows[0].count),
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required." });
    }

    const result = await pool.query(
      `SELECT id, firstname, lastname, email, ph,profile FROM users WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ status: false, message: "User not found" });
    }

    return res.status(200).json({ status: true, user: result.rows[0] });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const uploadFunc = usersProfiles.single("profile");

    uploadFunc(req, res, async (err) => {
      if (err) {
        console.log("Error:  ",err.message)

        if(err.message === "Unexpected field"){
          return res.status(400).json({
            status: false,
            message: "Upload only 1 img",
          });
        } 
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            status: false,
            message: "File size should be less than 3MB",
          });
        }
        if (err.message === "Img type must be jpeg, jpg or png") {
          return res.status(400).json({
            status: false,
            message: err.message,
          });
        }
        return res.status(500).json({
          status: false,
          message: "Server error",
          error: err.message,
        });
      }

      const { firstname, lastname, email, ph, password } = req.body;
      let profileImage = null;

      const resultId = await pool.query(`select from users where id = $1`, [
        userId,
      ]);

      if (resultId.rows.length == 0) {
        return res.status(400).json({
          status: false,
          message: "User Id is not found",
        });
      }

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

      // Validation for email
      if (email) {
        if (email.length > 250) {
          return res.status(400).json({
            status: false,
            message: "Email is to long.",
          });
        }
        if (!validator.isEmail(email)) {
          return res.status(400).json({
            status: false,
            message: "Email is invalid.",
          });
        }

        const existingEmail = await pool.query(
          "SELECT * FROM users WHERE email = $1 AND id != $2",
          [email, userId]
        );
        if (existingEmail.rows.length > 0) {
          return res
            .status(400)
            .json({ status: false, message: "Email is already used." });
        }
      }

      // Validation for password
      if (password) {
        const passwordregex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^\s]{6,20}$/;

        if (!passwordregex.test(password)) {
          return res.status(400).json({
            status: false,
            message:
              "Password must has 1 caps letter & 1 small letter & 1 number & 1 special character & atleast 6 letters & max 20 letters & no whitespace",
          });
        }
      }

      // Validation for firstname
      if (firstname) {
        const nameregex = /^[A-Za-z]+$/;

        if (
          firstname.length < 3 ||
          firstname.length > 30 ||
          !nameregex.test(firstname)
        ) {
          return res.status(400).json({
            status: false,
            message:
              "Firstname must contain only letters and be 3-20 characters.",
          });
        }
      }

      // Validation for lastname
      if (lastname) {
        const nameregex = /^[A-Za-z]+$/;

        if (
          lastname.length < 1 ||
          lastname.length > 20 ||
          !nameregex.test(lastname)
        ) {
          return res.status(400).json({
            status: false,
            message:
              "Lastname must contain only letters and be 1-20 characters.",
          });
        }
      }

      // Build dynamic update query
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
        fields.push(`email = $${index++}`);
        values.push(email);
      }
      if (ph) {
        fields.push(`ph = $${index++}`);
        values.push(ph);
      }
      if (password) {
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
          status: false,
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
          .json({ status: false, message: "User not found" });
      }

      return res.status(200).json({
        status: true,
        message: "User updated successfully",
        user: result.rows[0],
      });
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.post = async (req, res) => {
  try {
    const upload = uploadPost.array("postImgs");

    upload(req, res, async (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            status: false,
            message: "File size should be less than 3MB",
          });
        }
        if (err.message === "Img type must be jpeg, jpg or png") {
          return res.status(400).json({
            status: false,
            message: err.message,
          });
        }
        return res.status(500).json({
          status: false,
          message: "Server error",
          error: err.message,
        });
      }

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          status: false,
          message: "At least one image is required",
        });
      }

      const { name, description } = req.body;

      if (!name || !description) {
        return res.status(400).json({
          status: false,
          message: "Name and description are required",
        });
      }

      if (name.length > 100 || name.length <= 1) {
        return res.status(400).json({
          status: false,
          message: "Name length is more then 100 or it is to small",
        });
      }
      if (description.length > 500 || description.length <= 2) {
        return res.status(400).json({
          status: false,
          message: "Description length is more then 500 or it is to small",
        });
      }

      const imageFilenames = req.files.map((file) => file.filename);

      const insertPost = `
        INSERT INTO post (userId, name, description, imgs)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      const values = [req.user.id, name, description, imageFilenames];

      const result = await pool.query(insertPost, values);

      return res.status(201).json({
        status: true,
        message: "User post uploaded successfully",
        post: result.rows[0],
      });
    });
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: err.message,
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const offset = (page - 1) * limit;

    const query = `
      SELECT 
        post.id,
        post.userid,
        users.firstname,
        users.lastname,
        users.email,
        users.profile,
        post.name,
        post.imgs,
        post.description,
        post.created_at
      FROM post
      JOIN users ON post.userid = users.id
      ORDER BY post.created_at DESC
      LIMIT $1 OFFSET $2;
    `;

    const result = await pool.query(query, [limit, offset]);
    const countResult = await pool.query("SELECT COUNT(*) FROM post;");

    return res.status(200).json({
      status: true,
      posts: result.rows,
      totalPost: parseInt(countResult.rows[0].count),
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getAllPostById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Post ID is required." });
    }

    const result = await pool.query("SELECT * FROM post WHERE id = $1;", [id]);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ status: false, message: "Post not found." });
    }

    return res.status(200).json({ status: true, post: result.rows[0] });
  } catch (err) {
    console.error("Error fetching post:", err);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: err.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      return res.status(400).json({ status: false, message: "Id is required" });
    }

    const fileResult = await pool.query(`SELECT imgs FROM post WHERE id=$1`, [
      id,
    ]);
    const oldImgs = fileResult.rows[0]?.imgs || [];

    oldImgs.forEach((img) => {
      const oldPath = path.join(__dirname, "..", "files", "userPost", img);
      fs.access(oldPath, (err) => {
        if (!err) {
          fs.unlink(oldPath, (err) => {
            if (err) console.error("Error deleting post image:", err);
            else console.log("Post image deleted:", img);
          });
        }
      });
    });

    const query = `DELETE FROM post WHERE id = $1;`;
    const result = await pool.query(query, [id]);

    if (result.rowCount === 0) {
      return res
        .status(400)
        .json({ status: false, message: "Cannot delete the post." });
    }

    return res.status(200).json({ status: true, message: "Post is deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const UploadPost = uploadPost.array("postImgs");

    UploadPost(req, res, async (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            status: false,
            message: "File size should be less than 3MB",
          });
        }
        if (err.message === "Img type must be jpeg, jpg or png") {
          return res.status(400).json({
            status: false,
            message: err.message,
          });
        }
        return res.status(500).json({
          status: false,
          message: "Server error",
          error: err.message,
        });
      }

      const { deleteImg, name, description } = req.body;

      const existingPost = await pool.query(
        "SELECT imgs FROM post WHERE id = $1",
        [id]
      );

      if (existingPost.rows.length === 0) {
        return res.status(400).json({
          status: false,
          message: "Post not found",
        });
      }

      if (name.length > 100 || name.length <= 1) {
        return res.status(400).json({
          status: false,
          message: "Name length is more then 100 or it is to small",
        });
      }
      if (description.length > 500 || description.length <= 2) {
        return res.status(400).json({
          status: false,
          message: "Description length is more then 500 or it is to small",
        });
      }

      let currentImgs = existingPost.rows[0].imgs || [];

      let deleteImgArray = [];
      if (deleteImg) {
        deleteImgArray = Array.isArray(deleteImg) ? deleteImg : [deleteImg];
      }

      if (deleteImgArray.length > 0) {
        for (let i = 0; i < deleteImgArray.length; i++) {
          const filePath = path.join(
            __dirname,
            "../files/userPost/",
            deleteImgArray[i]
          );
          try {
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
              console.log("Old image deleted:", deleteImgArray[i]);
            } else {
              console.log("File not found:", filePath);
              return res.status(400).json({
                status: false,
                message: "File not found",
              });
            }
          } catch (err) {
            console.error("Error deleting old image:", err);
          }

          currentImgs = currentImgs.filter((img) => img !== deleteImgArray[i]);
        }
      }

      let fields = [];
      let values = [];
      let index = 1;

      if (name) {
        fields.push(`name = $${index++}`);
        values.push(name);
      }

      if (description) {
        fields.push(`description = $${index++}`);
        values.push(description);
      }

      if (req.files && req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
          currentImgs.push(path.basename(req.files[i].path));
        }
      }

      fields.push(`imgs = $${index++}`);
      values.push(currentImgs);

      if (fields.length === 0) {
        return res.status(400).json({
          status: false,
          message: "No fields to update",
        });
      }

      const updateQuery = `UPDATE post SET ${fields.join(
        ", "
      )} WHERE id = $${index} RETURNING *;`;
      values.push(id);

      const result = await pool.query(updateQuery, values);

      if (result.rows.length === 0) {
        return res.status(404).json({
          status: false,
          message: "Post not found",
        });
      }

      return res.status(200).json({
        status: true,
        message: "Post is updated successfully",
        post: result.rows[0],
      });
    });
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: err.message,
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;
    if (!oldPassword || !newPassword) {
      return res
        .status(400)
        .json({ status: false, message: "All fields required" });
    }
    const passwordregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^\s]{6,20}$/;
    if (!passwordregex.test(newPassword)) {
      return res.status(400).json({
        status: false,
        message:
          "Password must has 1 caps letter & 1 small letter & 1 number & 1 special character & atleast 6 letters & max 20 letters & no whitespace",
      });
    }

    const query = `SELECT password FROM users WHERE id = $1`;
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(400).json({ status: false, message: "User not found" });
    }

    const hashedPassword = result.rows[0].password;
    const isMatch = await bcrypt.compare(oldPassword, hashedPassword);

    if (!isMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Old password is incorrect" });
    }

    const isSameAsOld = await bcrypt.compare(newPassword, hashedPassword);
    if (isSameAsOld) {
      return res.status(400).json({
        status: false,
        message: "New password cannot be same as old password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const newHashed = await bcrypt.hash(newPassword, salt);

    await pool.query(`UPDATE users SET password=$1 WHERE id=$2`, [
      newHashed,
      id,
    ]);

    return res
      .status(200)
      .json({ status: true, message: "Password changed successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};
