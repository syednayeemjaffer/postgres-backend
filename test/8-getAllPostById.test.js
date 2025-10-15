// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");

// chai.use(chaiHttp);
// const { expect } = chai;

// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZXIiLCJsYXN0TmFtZSI6Im4iLCJpYXQiOjE3NjAzMjg1MjQsImV4cCI6MTc2MDQxNDkyNH0.kbvb5eFP0DHhwuwV29YtyXyrT4s7d1iffkwU_o73MIY"

// const id = 27;
// const id2 = 999;
// describe("getAllPostById", () => {
//   it("should get post by id", (done) => {
//     chai
//       .request(server)
//       .get(`/api/getPosts/${id}`)
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.be.true;
//         expect(res.body.post).to.have.property("id");
//         expect(res.body.post.id).to.equal(id);
//         done();
//       });
//   });

//   it("should error like user is not found", (done) => {
//     chai
//       .request(server)
//       .get(`/api/getPosts/${id2}`)
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         expect(res.body.status).to.be.false;

//         done();
//       });
//   });
// });
