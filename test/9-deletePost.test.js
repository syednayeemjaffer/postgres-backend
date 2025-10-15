// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");

// chai.use(chaiHttp);
// const { expect } = chai;

// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZXIiLCJsYXN0TmFtZSI6Im4iLCJpYXQiOjE3NjAzMjg1MjQsImV4cCI6MTc2MDQxNDkyNH0.kbvb5eFP0DHhwuwV29YtyXyrT4s7d1iffkwU_o73MIY"

// const existingPostId = 102;
// const nonExistingPostId = 999; 

// describe("deletePost API", () => {
//   it("should delete the post by id", (done) => {
//     chai
//       .request(server)
//       .delete(`/api/deletepost/${existingPostId}`)
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.be.true;
//         expect(res.body.message).to.equal("Post is deleted");
//         done();
//       });
//   }); 

//   it("should return error when post not found", (done) => {
//     chai
//       .request(server)
//       .delete(`/api/deletepost/${nonExistingPostId}`)
//       .set("Authorization", `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("Cannot delete the post.");
//         done();
//       });
//   });
// });
