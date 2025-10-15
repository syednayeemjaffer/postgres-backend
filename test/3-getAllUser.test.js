// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");

// chai.use(chaiHttp);
// const { expect } = chai;

// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZXIiLCJsYXN0TmFtZSI6Im4iLCJpYXQiOjE3NjAzMjg1MjQsImV4cCI6MTc2MDQxNDkyNH0.kbvb5eFP0DHhwuwV29YtyXyrT4s7d1iffkwU_o73MIY"
// describe("User getAllUser API", () => {
//   it("should get first 3 the users", (done) => {
//     chai
//       .request(server)
//       .get("/api/users")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.be.true;
//         expect(res.body.users).to.have.lengthOf(3);
//         done();
//       });
//   });

//   it("should get next 5 & length 5", (done) => {
//     chai
//       .request(server)
//       .get("/api/users?page=2&limit=5")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.be.true;
//         expect(res.body.users).to.have.lengthOf(5);
//         done();
//       });
//   });

//   it("should return empty data if page exceeds total users", (done) => {
//     chai
//       .request(server)
//       .get("/api/users?page=999&limit=10")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.be.true;
//         expect(res.body.users).to.be.an("array").that.is.empty;
//         done();
//       });
//   });

//   it("should return 500 for invalid page number", (done) => {
//     chai
//       .request(server)
//       .get("/api/users?page=-1&limit=5")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res).to.have.status(500);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Server error");
//         done();
//       });
//   });
// });
