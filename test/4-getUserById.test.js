// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");

// chai.use(chaiHttp);
// const { expect } = chai;

// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZXIiLCJsYXN0TmFtZSI6Im4iLCJpYXQiOjE3NjAzMjg1MjQsImV4cCI6MTc2MDQxNDkyNH0.kbvb5eFP0DHhwuwV29YtyXyrT4s7d1iffkwU_o73MIY"

// const userId = 24;
// const userId2 = 11111;
// describe("getUserById API", () => {
//   it("should get a user by id", (done) => {
//     chai
//       .request(server)
//       .get(`/api/user/${userId}`)
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.be.true;
//         expect(res.body.user).to.have.property("email");
//         done();
//       });
//   });
//   it("should get error due to invalid id", (done) => {
//     chai
//       .request(server)
//       .get(`/api/user/${userId2}`)
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         done();
//       });
//   });
// });
