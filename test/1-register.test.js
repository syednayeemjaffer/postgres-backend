// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");
// const pool = require("../config/pg");

// chai.use(chaiHttp);
// const { expect } = chai;

// describe("User Register API", () => {
//   before(async () => {
//     await pool.query("DELETE FROM users WHERE email LIKE '99@gmail.com'");
//   });
//   //general
//   it("should register a new user successfully", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Test")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body.status).to.be.true;
//         expect(res.body.user.email).to.equal("99@gmail.com");
//         done();
//       });
//   });

//   it("should register fails without first name", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("First name is required.");

//         done();
//       });
//   });

//   it("should register fails without last name", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Test")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Lastname is required.");

//         done();
//       });
//   });

//   it("should register fails without email", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Test")
//       .field("lastname", "User")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("email is required");
//         done();
//       });
//   });

//   it("should register fails without ph", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Test")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Ph is required.");

//         done();
//       });
//   });

//   it("should register fails without password", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Test")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Password is required.");

//         done();
//       });
//   });

//   it("should return error if profile image is missing", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "NoImage")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9999999999")
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Profile image is required");
//         done();
//       });
//   });

//   it("should register a new user successfully", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Test")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/man57_1757673842.svg"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Img type must be jpeg, jpg or png");
//         done();
//       });
//   });

//   //email
//   it("should return error for invalid email format", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Invalid")
//       .field("lastname", "Email")
//       .field("email", "wrongemailformat")
//       .field("password", "Aa@1111")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Email is invalid.");
//         done();
//       });
//   });

//   it("should return error for duplicate email", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Duplicate")
//       .field("lastname", "Email")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "8888888888")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Email is already used.");
//         done();
//       });
//   });

//   it("should return error for invalid email format due to length exceeded", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Invalid")
//       .field("lastname", "Email")
//       .field("email", "a".repeat(500) + "@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Email is to long.");
//         done();
//       });
//   });

//   it("should fail if email is missing", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "NoEmail")
//       .field("lastname", "User")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("email is required");
//         done();
//       });
//   });

//   //password
//   it("should return error for weak password", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Weak")
//       .field("lastname", "Password")
//       .field("email", "99@gmail.com")
//       .field("password", "123")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for weak password due to missing of small case ", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Weak")
//       .field("lastname", "Password")
//       .field("email", "99@gmail.com")
//       .field("password", "AA@1111")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for weak password due to missing of large case ", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Weak")
//       .field("lastname", "Password")
//       .field("email", "99@gmail.com")
//       .field("password", "aa@1111")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for weak password due to missing of number ", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Weak")
//       .field("lastname", "Password")
//       .field("email", "99@gmail.com")
//       .field("password", "AA@wwww")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for weak password due to missing of special characters case ", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Weak")
//       .field("lastname", "Password")
//       .field("email", "99@gmail.com")
//       .field("password", "AA11111")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error due to password is to long", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Weak")
//       .field("lastname", "Password")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111".repeat(100))
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error due to password is to short", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Weak")
//       .field("lastname", "Password")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1")
//       .field("ph", "1234567890")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   //firstname
//   it("should fail due to first name length is less the 3", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .field("firstname", "T")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal(
//           "Firstname must contain only letters and be 3-20 characters."
//         );
//         done();
//       });
//   });

//   it("should fail due to first name length is more then the 30", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .field(
//         "firstname",
//         "Twwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
//       )
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal(
//           "Firstname must contain only letters and be 3-20 characters."
//         );
//         done();
//       });
//   });

//   it("should fail due to first name has special character", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .field("firstname", "Twwww@")
//       .field("lastname", "User")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal(
//           "Firstname must contain only letters and be 3-20 characters."
//         );
//         done();
//       });
//   });

//   //lastname
//   it("should fail due to name length is less the 1", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .field("firstname", "Test")
//       .field("lastname", "")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Lastname is required.");
//         done();
//       });
//   });

//   it("should fail due to last name length is more then the 20", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .field("firstname", "Test")
//       .field("lastname", "")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Lastname is required.");
//         done();
//       });
//   });

//   it("should fail due to last name length has special characters", (done) => {
//     chai
//       .request(server)
//       .post("/api/register")
//       .field("firstname", "Test")
//       .field("lastname", "sds@")
//       .field("email", "99@gmail.com")
//       .field("password", "Aa@1111")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal(
//           "Lastname must contain only letters and be 1-20 characters."
//         );
//         done();
//       });
//   });
// });
