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
};
const incorrectUserCredentials = {
  email: 'khoatran121294@gmail.com', 
  password: '111111'
};
const newUserCredentials = {
  email: 'khoatran@gmail.com', 
  password: '111111'
};

describe("Accounts", () => {
  beforeEach(done => {
    //Before each test we empty the database in your case
    done();
  });
  /*
   * Test the /POST Login
   */
  describe("/POST login account", () => {
    it("it should LOGIN FAILED with password INCORRECT", done => {
      chai
        .request(server)
        .post("/api/v1/login")
        .send(incorrectUserCredentials)
        .end((err, res) => {
          res.should.have.status(HTTP_STATUS_CODE.BAD_REQUEST);
          done();
        });
    });
    it("it should LOGIN SUCCESS with password CORRECT", done => {
      chai
        .request(server)
        .post("/api/v1/login")
        .send(userCredentials)
        .end((err, res) => {
          res.should.have.status(HTTP_STATUS_CODE.OK);
          done();
        });
    });
  });

  /*
   * Test the /POST Register
   */
  describe("/POST register a new account", () => {
    it("it should REGISTER FAILED with email IS EXISTED", done => {
      chai
        .request(server)
        .post("/api/v1/register")
        .send(userCredentials)
        .end((err, res) => {
          res.should.have.status(HTTP_STATUS_CODE.BAD_REQUEST);
          done();
        });
    });
    it("it should REGISTER SUCCESS with email IS NOT EXISTED", done => {
      chai
        .request(server)
        .post("/api/v1/register")
        .send(newUserCredentials)
        .end((err, res) => {
          res.should.have.status(HTTP_STATUS_CODE.OK);
          done();
        });
    });
  });
});
