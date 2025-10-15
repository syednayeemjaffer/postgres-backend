const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.use(chaiHttp);
const { expect } = chai;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiMkBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJqYWZmZWZmZiIsImxhc3ROYW1lIjoibiIsImlhdCI6MTc2MDUwMTE1MiwiZXhwIjoxNzYwNTg3NTUyfQ.SD4GFKwNGZgeZUC0x-O5R8rEgHQVUntfjlRk_UMMVss";

describe("POST /api/post", () => {
  //   //    general
  //   it("should upload a post successfully", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Test Post")
  //       .field("description", "Testing description")
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(201);
  //         expect(res.body.status).to.be.true;
  //         expect(res.body.post).to.have.property("id");
  //         done();
  //       });
  //   });

//   it("should upload a post with single img", (done) => {
//     chai
//       .request(server)
//       .post("/api/post")
//       .set("Authorization", `Bearer ${token}`)
//       .set("Content-Type", "multipart/form-data")
//       .field("name", "Test Post")
//       .field("description", "Testing description")
//       .attach(
//         "postImgs",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body.status).to.be.true;
//         expect(res.body.post).to.have.property("id");
//         done();
//       });
//   });

//   it("should upload a post due to img size is to large", (done) => {
//     chai
//       .request(server)
//       .post("/api/post")
//       .set("Authorization", `Bearer ${token}`)
//       .set("Content-Type", "multipart/form-data")
//       .field("name", "Test Post")
//       .field("description", "Testing description")
//       .attach(
//         "postImgs",
//         "/home/syednayeem@Bsetec.com/Downloads/ChatGPT Image Oct 15, 2025, 11_06_05 AM.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("File size should be less than 3MB")
//         done();
//       });
//   });

//     it("should upload a post due to img size is to large even sending in multi img", (done) => {
//     chai
//       .request(server)
//       .post("/api/post")
//       .set("Authorization", `Bearer ${token}`)
//       .set("Content-Type", "multipart/form-data")
//       .field("name", "Test Post")
//       .field("description", "Testing description")
//       .attach("postImgs", Buffer.alloc(4 * 1024 * 1024), "large.jpg") 

//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("File size should be less than 3MB")
//         done();
//       });
//   });

//       it("should upload a post due to img size is to large even sending in multi img", (done) => {
//     chai
//       .request(server)
//       .post("/api/post")
//       .set("Authorization", `Bearer ${token}`)
//       .set("Content-Type", "multipart/form-data")
//       .field("name", "Test Post")
//       .field("description", "Testing description")
//       .attach("postImgs", Buffer.alloc(4 * 1024 * 1024), "large.jpg") 
//       .attach(
//         "postImgs",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.status).to.be.false;
//         expect(res.body.message).to.equal("File size should be less than 3MB")
//         done();
//       });
//   });

//       it("should upload a post due to img size is to large even sending in multi img", (done) => {
//     chai
//       .request(server)
//       .post("/api/post")
//       .set("Authorization", `Bearer ${token}`)
//       .set("Content-Type", "multipart/form-data")
//       .field("name", "Test Post")
//       .field("description", "Testing description")
//       .attach("postImgs", "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNile.png") 

//       .end((err, res) => {
//                 console.log(`Error:`+err.message)

//         expect(err.message).to.equal("ENOENT: no such file or directory, open '/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNile.png'")
//         done();
//       });
//   });

//   it("should upload a post with multiple img", (done) => {
//     chai
//       .request(server)
//       .post("/api/post")
//       .set("Authorization", `Bearer ${token}`)
//       .set("Content-Type", "multipart/form-data")
//       .field("name", "Test Post")
//       .field("description", "Testing description")
//       .attach(
//         "postImgs",
//         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
//       )
//       .attach(
//         "postImgs",
//         "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
//       )
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body.status).to.be.true;
//         expect(res.body.post).to.have.property("id");
//         done();
//       });
//   });
  //   it("should fail when no image is uploaded", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .field("name", "No Image Post")
  //       .field("description", "Missing images")

  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("At least one image is required");
  //         done();
  //       });
  //   });

  //   it("should fail due to token missing", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .field("name", "No Image Post")
  //       .field("description", "Missing images")
  //       .end((err, res) => {
  //         expect(res).to.have.status(401);
  //         expect(res.body.message).to.equal("Token is required");
  //         done();
  //       });
  //   });

  //   it("should fail when name is missing", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Name and description are required");
  //         done();
  //       });
  //   });

  //   it("should fail when name or description is missing", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .field("name", "dyeee")
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Name and description are required");
  //         done();
  //       });
  //   });

  //   it("should fail when name or name is missing", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .field("description", "dyeee")
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Name and description are required");
  //         done();
  //       });
  //   });

  //   it("should fail when image type is not jpeg/jpg/png", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .field("name", "Invalid Type Post")
  //       .field("description", "Invalid image type")
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/man57_1757673842.svg"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Img type must be jpeg, jpg or png");
  //         done();
  //       });
  //   });

  //   it("should fail when video is uploaded", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .field("name", "Invalid Type Post")
  //       .field("description", "Invalid image type")
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/7188576_Halloween_Child_1280x720.mp4"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Img type must be jpeg, jpg or png");
  //         done();
  //       });
  //   });

  //   //name
  //   it("should upload a post fails due to name is to long ", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Test".repeat(101))
  //       .field("description", "Testing description")
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal("Name length is more then 100");
  //         done();
  //       });
  //   });

    //   it("should upload a post fails due to name is empty string", (done) => {
    //   chai
    //     .request(server)
    //     .post("/api/post")
    //     .set("Authorization", `Bearer ${token}`)
    //     .set("Content-Type", "multipart/form-data")
    //     .field("name", " ")
    //     .field("description", "Testing description")
    //     .attach(
    //       "postImgs",
    //       "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
    //     )
    //     .attach(
    //       "postImgs",
    //       "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
    //     )
    //     .end((err, res) => {
    //       expect(res).to.have.status(400);
    //       expect(res.body.status).to.be.false;
    //       expect(res.body.message).to.equal("Name length is more then 100 or it is to small");
    //       done();
    //     });
    // });

  //   //description
  //   it("should upload a post fails due to description is to long", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/post")
  //       .set("Authorization", `Bearer ${token}`)
  //       .set("Content-Type", "multipart/form-data")
  //       .field("name", "Test")
  //       .field("description", "Testing".repeat(600))
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
  //       )
  //       .attach(
  //         "postImgs",
  //         "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
  //       )
  //       .end((err, res) => {
  //         expect(res).to.have.status(400);
  //         expect(res.body.status).to.be.false;
  //         expect(res.body.message).to.equal(
  //           "Description length is more then 500"
  //         );
  //         done();
  //       });
  //   });

    //   it("should upload a post fails due to description is empty string", (done) => {
    //   chai
    //     .request(server)
    //     .post("/api/post")
    //     .set("Authorization", `Bearer ${token}`)
    //     .set("Content-Type", "multipart/form-data")
    //     .field("name", "Test")
    //     .field("description", " ")
    //     .attach(
    //       "postImgs",
    //       "/home/syednayeem@Bsetec.com/Downloads/Batman-Arkham-Origins-PNG-File.png"
    //     )
    //     .attach(
    //       "postImgs",
    //       "/home/syednayeem@Bsetec.com/Downloads/branislav-rodman-oKyZoJy03ZA-unsplash.jpg"
    //     )
    //     .end((err, res) => {
    //       expect(res).to.have.status(400);
    //       expect(res.body.status).to.be.false;
    //       expect(res.body.message).to.equal(
    //         "Description length is more then 500 or it is to small"
    //       );
    //       done();
    //     });
    // });
});
