import { HTTP_STATUS_CODE } from "../src/app.constant";

let chai = require("chai");
let chaiHttp = require("chai-http");
let { server } = require("../src/app");
chai.use(chaiHttp);
chai.should();

//set up the data we need to pass to the login method
const userCredentials = {
  email: 'khoatran121294@gmail.com', 
  password: '123456'
}

describe("Movies", () => {
  beforeEach(done => {
    //Before each test we empty the database in your case
    done();
  });
  /*
   * Test the /GET route
   */
  describe("/GET movies", () => {
    it("it should GET all the movies", done => {
      chai
        .request(server)
        .get("/api/v1/movies")
        .end((err, res) => {
          res.should.have.status(HTTP_STATUS_CODE.OK);
          res.body.should.be.a("array");
          // res.body.length.should.be.eql(3);
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe("/POST movies", () => {
    //Login the user
    let token = null;
    before(function(done){
      chai
        .request(server)
        .post('/api/v1/login')
        .send(userCredentials)
        .end(function(err, res){
          res.should.have.status(HTTP_STATUS_CODE.OK);
          token = res.body.token;
          done();
        });
    });

    it("it should RETURN unauthorized error", done => {
      chai
        .request(server)
        .post("/api/v1/movies")
        .end((err, res) => {
          res.should.have.status(HTTP_STATUS_CODE.UNAUTHORIZED);
          res.body.should.be.a("object");
          done();
        });
    });
    it("it should ADD a new movie SUCCESS with authorized user", done => {
      chai
        .request(server)
        .post("/api/v1/movies")
        .set("x-access-token", token)
        .send({
          title: "dummy title", 
          linkUrl: "dummy link", 
          description: "dummy description"
        })
        .end((err, res) => {
          res.should.have.status(HTTP_STATUS_CODE.OK);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
