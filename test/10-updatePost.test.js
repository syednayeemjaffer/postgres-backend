// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../app");
// const path = require("path");

// chai.use(chaiHttp);
// const { expect } = chai;

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZWZmZiIsImxhc3ROYW1lIjoibiIsImlhdCI6MTc2MDUwMTE1MiwiZXhwIjoxNzYwNTg3NTUyfQ.SD4GFKwNGZgeZUC0x-O5R8rEgHQVUntfjlRk_UMMVss";

// const id = 27;
// const id1 = 1111;

// describe("updatePost API", () => {
  //general
  // it("should update the post", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });

  //   it("should update the post only name", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });
  //   it("should update the post without deleting img", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });

  // it("should update the post change name only", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .attach("postImgs")
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });


  //   it("should update the post by uploading single img", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });
  //       it("should update the post by uploading multi img", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .attach(
  //       "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });
  // it("should update the post by just deleting single img", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .field("deleteImg", "1760338871067Batman-Arkham-Origins-PNG-File.png")
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });
  // it("should update the post by just deleting multi img", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .field("deleteImg", "1760338871067Batman-Arkham-Origins-PNG-File.png")
  //     .field("deleteImg", "1760338871067Batman-Arkham-Origins-PNG-File.png")
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(200);
  //       expect(res.body.status).to.be.true;
  //       expect(res.body.message).to.equal("Post is updated successfully");
  //       expect(res.body.post).to.have.property("id");
  //       done();
  //     });
  // });

  // it("should update fail due to invalid token", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer 12ess2`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .field("deleteImg", "1760100795153Batman-Arkham-Origins-PNG-File.png")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(400);
  //       expect(res.body.status).to.be.false;
  //       expect(res.body.message).to.equal("Invalid token");
  //       done();
  //     });
  // });
  //     it("should update fail due img file is not found", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .field("deleteImg", "225eric-brehm-JVQ7ElHJj9w-unsplash.jpg")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(400);
  //       expect(res.body.status).to.be.false;
  //       expect(res.body.message).to.equal("File not found");
  //       done();
  //     });
  // });
  // it("should update fail due img file exceed 3 mb", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .field("deleteImg", "225eric-brehm-JVQ7ElHJj9w-unsplash.jpg")
  //     .attach("postImgs", Buffer.alloc(4 * 1024 * 1024), "large.jpg")
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(400);
  //       expect(res.body.status).to.be.false;
  //       expect(res.body.message).to.equal("File size should be less than 3MB");
  //       done();
  //     });
  // });
  //     it("should update fail due to missing token", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated Post Name")
  //     .field("description", "Updated description")
  //     .field("deleteImg", "1760100795153Batman-Arkham-Origins-PNG-File.png")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(401);
  //       expect(res.body.status).to.be.false;
  //       expect(res.body.message).to.equal("Token is required");
  //       done();
  //     });
  // });
  //   it("should return error due to invalid id", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/updatePost/${id1}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Updated Post Name")
  //       .field("description", "Updated description")
  //       .attach(
  //         "postImgs",
  //         path.resolve(
  //           "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //         )
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Post not found");
  //         done();
  //       });
  //   });
  //   //name
  //   it("should update the post fails because the name exceed 100", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/updatePost/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Updated".repeat(101))
  //       .field("description", "Updated description")
  //       .field("deleteImg", "1760100795153Batman-Arkham-Origins-PNG-File.png")
  //       .attach(
  //         "postImgs",
  //         path.resolve(
  //           "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //         )
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Name length is more then 100 or it is to small");
  //         done();
  //       });
  //   });
  // it("should update the post fails because the name to small", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "U")
  //     .field("description", "Updated description")
  //     .field("deleteImg", "1760100795153Batman-Arkham-Origins-PNG-File.png")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(400);
  //       expect(res.body.status).to.be.false;
  //       expect(res.body.message).to.equal("Name length is more then 100 or it is to small");
  //       done();
  //     });
  // });
  //   //description
  //   it("should update the post is fail because the description exceed 500", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/updatePost/${id}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Updated")
  //       .field("description", "Updated".repeat(501))
  //       .field("deleteImg", "1760100795153Batman-Arkham-Origins-PNG-File.png")
  //       .attach(
  //         "postImgs",
  //         path.resolve(
  //           "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //         )
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal(
  //           "Description length is more then 500"
  //         );
  //         done();
  //       });
  //   });
  // it("should update the post is fail because the description exceed 500", (done) => {
  //   chai
  //     .request(server)
  //     .put(`/api/updatePost/${id}`)
  //     .set("Authorization", `Bearer ${token}`)
  //     .set("Content-Type", "multipart/form-data")
  //     .field("name", "Updated")
  //     .field("description", "Up")
  //     .field("deleteImg", "1760100795153Batman-Arkham-Origins-PNG-File.png")
  //     .attach(
  //       "postImgs",
  //       path.resolve(
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //     )
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status(400);
  //       expect(res.body.status).to.be.false;
  //       expect(res.body.message).to.equal(
  //         "Description length is more then 500 or it is to small"
  //       );
  //       done();
  //     });
  // });
  //   it("should return error due sending svg", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/updatePost/${id1}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Updated Post Name")
  //       .field("description", "Updated description")
  //       .attach(
  //         "postImgs",
  //         path.resolve(
  //           "/home/syednayeem@Bsetec.com/Downloads/man57_1757673842.svg"
  //         )
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Img type must be jpeg, jpg or png");
  //         done();
  //       });
  //   });
  //   it("should return error due sending video", (done) => {
  //     chai
  //       .request(server)
  //       .put(`/api/updatePost/${id1}`)
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Updated Post Name")
  //       .field("description", "Updated description")
  //       .attach(
  //         "postImgs",
  //         path.resolve(
  //           "/home/syednayeem@Bsetec.com/Downloads/7188576_Halloween_Child_1280x720.mp4"
  //         )
  //       )
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Img type must be jpeg, jpg or png");
  //         done();
  //       });
  //   });
//});
