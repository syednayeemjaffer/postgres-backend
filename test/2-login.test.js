const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
chai.use(chaiHttp);
const { expect } = chai;

describe("User Login API", () => {
  
//   it("should login the user successfully", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com", password: "Aa@1111" })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.be.true;
//         expect(res.body.message).to.equal("Login successful");
//         expect(res.body.token).to.exist;
//         done();
//       });
//   });

//   it("should login the user fails due to email missing", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ password: "Aa@1111" })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("All fields are required");
//         done();
//       });
//   });

//     it("should login the user fails due to passowrd missing", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com" })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("All fields are required");
//         done();
//       });
//   });

//   it("should fail due to wrong email", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "wrong@gmail.com", password: "Aa@1111" })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("First create user account.");
//         done();
//       });
//   });

//   it("should fail due to email length exceeding 50", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({
//         email: "a".repeat(51) + "@gmail.com",
//         password: "Aa@1111",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Email length is more the 50");
//         done();
//       });
//   });

//   it("should return error for weak password (no small letter)", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com", password: "AA@1111" })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for weak password (no capital letter)", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com", password: "aa@1111" })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for weak password (no number)", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com", password: "AA@aaaa" })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for weak password (no special character)", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com", password: "AA11111" })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });
//   it("should return error for password length is to long", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com", password: "Aa@1111".repeat(200) })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

//   it("should return error for password length is to short", (done) => {
//     chai
//       .request(server)
//       .post("/api/login")
//       .send({ email: "99@gmail.com", password: "Aa@1"})
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.include("Password must has");
//         done();
//       });
//   });

});
