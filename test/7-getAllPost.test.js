// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");

// chai.use(chaiHttp);
// const { expect } = chai;

// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZXIiLCJsYXN0TmFtZSI6Im4iLCJpYXQiOjE3NjAzMjg1MjQsImV4cCI6MTc2MDQxNDkyNH0.kbvb5eFP0DHhwuwV29YtyXyrT4s7d1iffkwU_o73MIY"

// describe("Get all post API ", () => {
//   it("should get first 3 the post", (done) => {
//     chai
//       .request(server)
//       .get("/api/getPosts")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res.body.status).to.be.true;
//         expect(res.body.posts);
//         expect(res.body.posts).to.have.lengthOf(3);
//         done();
//       });
//   });

//   it("should get first 5 post", (done) => {
//     chai
//       .request(server)
//       .get("/api/getPosts?page=1&limit=5")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res.body.status).to.be.true;
//         expect(res.body.posts);
//         expect(res.body.posts).to.have.lengthOf(5);
//         done();
//       });
//   });

//   it("should return empty data if page exceeds total post", (done) => {
//     chai
//       .request(server)
//       .get("/api/getPosts?page=9999&limit=5")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res.body.status).to.be.true;
//         expect(res.body.posts);
//         expect(res.body.posts).to.have.lengthOf(0);
//         done();
//       });
//   });

//     it("should return empty data if page exceeds total post", (done) => {
//     chai
//       .request(server)
//       .get("/api/getPosts?page=9999&limit=5")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res.body.status).to.be.true;
//         expect(res.body.posts);
//         expect(res.body.posts).to.have.lengthOf(0);
//         done();
//       });
//   });

//     it("should return 500 for invalid page number", (done) => {
//     chai
//       .request(server)
//       .get("/api/getPosts?page=-1&limit=5")
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res).to.have.status(500);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Server error");
//         done();
//       });
//   });
// });
