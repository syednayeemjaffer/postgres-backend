// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");

// chai.use(chaiHttp);
// const { expect } = chai;

// const id = 27;
// const id2 = 222;
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZWZmZiIsImxhc3ROYW1lIjoibiIsImlhdCI6MTc2MDUwMTE1MiwiZXhwIjoxNzYwNTg3NTUyfQ.SD4GFKwNGZgeZUC0x-O5R8rEgHQVUntfjlRk_UMMVss";

// const invalidToken = "Bearer invalidtoken123";

// describe("Update user API", () => {
  //   //general
  //   it("should update the user", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("ph", "9876543210")
  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(200);
  //         expect(res.body.status).to.be.true;
  //         expect(res.body.message).to.equal("User updated successfully");
  //         done();
  //       });
  //   });

  //   it("should update the user first name only", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .attach("profile")
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(200);
  //         expect(res.body.status).to.be.true;
  //         expect(res.body.message).to.equal("User updated successfully");
  //         done();
  //       });
  //   });

//   it("should fail to update user when multiple images are uploaded", (done) => {
//     chai
//       .request(server)
//       .put(`/api/update/${id}`)
//       .set("Authorization", `Bearer ${token}`)
//       .set("Content-Type", "multipart/form-data")
//       .field("firstname", "Updated")
//       .field("lastname", "User")
//       .field("ph", "9876543210")
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .attach(
//         "profile",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Upload only 1 img");
//         done();
//       });
//   });

  //   it("should update the user fails due to img size is more then 3 mb", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("ph", "9876543210")
  //       .attach(
  //         "profile",
  //         Buffer.alloc(4 * 1024 * 1024), "large.jpg"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("File size should be less than 3MB");
  //         done();
  //       });
  //   });

  //   it("should update the user fails due to uploading video", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("ph", "9876543210")
  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/7188576_Halloween_Child_1280x720.mp4"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Img type must be jpeg, jpg or png");
  //         done();
  //       });
  //   });

  //     it("should update the user last name only", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("lastname", "Updated")
  //       .attach("profile")
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(200);
  //         expect(res.body.status).to.be.true;
  //         expect(res.body.message).to.equal("User updated successfully");
  //         done();
  //       });
  //   });

  //   it("should update the ph", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")

  //       .field("ph", "9876543210")
  //       .attach(
  //         "profile"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(200);
  //         expect(res.body.status).to.be.true;
  //         expect(res.body.message).to.equal("User updated successfully");
  //         done();
  //       });
  //   });

  //   it("should update the user", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")

  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(200);
  //         expect(res.body.status).to.be.true;
  //         expect(res.body.message).to.equal("User updated successfully");
  //         done();
  //       });
  //   });

  //   it("should return error due to invalid token", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id2}`)
  //       .set("Authorization", `Bearer 11daczxcascazx }`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("ph", "9876543210")
  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.message).to.be.equal('Invalid token')
  //         done();
  //       });
  //   });

  //     it("should return error due to token missing", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id2}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("ph", "9876543210")
  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(401);
  //         expect(res.body.message).to.be.equal('Token is required')
  //         done();
  //       });
  //   });

  //   it("should return error due to invalid id", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id2}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("ph", "9876543210")
  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("User Id is not found");
  //         done();
  //       });
  //   });

  //   //email
  //   it("should return error for invalid email format", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("email", "invalidemail")
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Email is invalid.");
  //         done();
  //       });
  //   });

  //   it("should return error for email length exceed length 250", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("email", "a".repeat(250) + "@gmail.com")
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Email is to long.");
  //         done();
  //       });
  //   });

  //   //password

  //   it("should return error for weak password due to no small letter", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("password", "AA@1111")
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //   it("should return error for weak password due to no large letter", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("password", "aa@1111")
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //   it("should return error for weak password due to no numbers", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("password", "AA@aaaa")
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //   it("should return error for weak password due to no special characters", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("password", "AAaaaaa")
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //   it("should update the user fails due to password is to long", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("password", "Aa@1111".repeat(100))
  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.be.include("Password must has 1 caps");
  //         done();
  //       });
  //   });

  //     it("should update the user fails due to password is to long", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/update/${id}`)
  //       .set("Authorization", `Bearer ${validToken}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("firstname", "Updated")
  //       .field("lastname", "User")
  //       .field("password", "Aa@1")
  //       .attach(
  //         "profile",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.be.include("Password must has 1 caps");
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
  //       .field("firstname", "T".repeat(33))
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

  //   //   //lastname
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

  
//});
