// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");

// chai.use(chaiHttp);
// const { expect } = chai;

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZWZmZiIsImxhc3ROYW1lIjoibiIsImlhdCI6MTc2MDUwMTE1MiwiZXhwIjoxNzYwNTg3NTUyfQ.SD4GFKwNGZgeZUC0x-O5R8rEgHQVUntfjlRk_UMMVss";

// const id = 28;
// const id2 = 25;

// describe("Change password API", () => {
  //   it("should change password", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "Aa@1111",
  //         newPassword: "AAa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(200);
  //         expect(res.body.status).to.be.true;
  //         expect(res.body.message).to.equal("Password changed successfully");
  //         done();
  //       });
  //   });

  //   it("should return error due to wrong old password", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "A11a@1111",
  //         newPassword: "AAa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Old password is incorrect");
  //         done();
  //       });
  //   });

  //   it("should return error due password regex", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111",
  //         newPassword: "a@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //   it("should return error due to missing of old password", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         newPassword: "AAa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("All fields required");
  //         done();
  //       });
  //   });

  //   it("should return error due to missing of new password", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("All fields required");
  //         done();
  //       });
  //   });

  //   it("should return error due to missing of both field", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({      })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("All fields required");
  //         done();
  //       });
  //   });

  //   it("should return server error due to missing send", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)

  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(500);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Server error");
  //         done();
  //       });
  //   });

  //   it("should return error due password is same for new and old", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id2}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "Aa@1111",
  //         newPassword: "Aa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("New password cannot be same as old password");
  //         done();
  //       });
  //   });

  //   it("should return error due invalid id", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${9989}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "Aa@1111",
  //         newPassword: "Aaa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("User not found");
  //         done();
  //       });
  //   });

  //   it("should return error due invalid token", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${9989}`)
  //       .set("Authorization", `Bearer we32wwxd`)
  //       .send({
  //         oldPassword: "Aa@1111",
  //         newPassword: "Aaa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Invalid token");
  //         done();
  //       });
  //   });

  //   it("should return error due invalid missing", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${9989}`)
  //       .send({
  //         oldPassword: "Aa@1111",
  //         newPassword: "Aaa@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(401);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Token is required");
  //         done();
  //       });
  //   });

  //   it("should return error due password missing of small letter", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111",
  //         newPassword: "A@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //     it("should return error due password missing of caps letter", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111",
  //         newPassword: "a@1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //     it("should return error due password missing of special characters", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111",
  //         newPassword: "aA1111"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //     it("should return error due password missing of numbers", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111",
  //         newPassword: "aA@@@@@"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //       it("should return error due password length is less then 6", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111",
  //         newPassword: "Aa@1"
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

  //         it("should return error due password length is more then 20", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/changePassword/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .send({
  //         oldPassword: "AAa@1111",
  //         newPassword: "Aa@1".repeat(20)
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.include("Password must has");
  //         done();
  //       });
  //   });

//   it("should return error due not giving id in url", (done) => {
//     chai
//       .request(server)
//       .put(`/api/changePassword/`)
//       .set("Authorization", `Bearer ${token}`)
//       .send({
//         oldPassword: "AAa@1111",
//         newPassword: "Aa@1".repeat(20),
//       })
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res).to.have.status(404);
//         done();
//       });
//   });

//   it("should return error due to giving unknown field", (done) => {
//     chai
//       .request(server)
//       .put(`/api/changePassword/${id}`)
//       .set("Authorization", `Bearer ${token}`)
//       .send({
//         oldsPaszzsword: "AAa@1111",
//         newPassword: "Aa@1".repeat(20),
//       })
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("All fields required");
//         done();
//       });
//   });


//});
