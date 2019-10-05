import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import resMessage from '../helpers/responseMessages';

const { expect } = chai;
chai.use(chaiHttp);

const signupUrl = '/api/v1/auth/signup';
const signinUrl = '/api/v1/auth/signin';

const user = {
  email: 'johndoe@mail.com',
  password: '123456',
};

const newUser = {
  name: 'John Doe',
  email: 'johndoe@mail.com',
  password: '123456'
};

describe('AUTH CONTROLLER', () => {
  describe('POST SIGN UP', () => {
    it('should respond with status 201 and user data', (done) => {
      chai.request(app)
        .post(signupUrl)
        .send(newUser)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('success', true);
          expect(res.body.payload.email).to.equal(newUser.email);
          done();
        });
    });

    it('should respond with error for empty field', (done) => {
      chai.request(app)
        .post(signupUrl)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('success', false);
          expect(res.body.payload[0]).to.equal('name is required');
          done();
        });
    });

    it('it should not register an already existing user', (done) => {
      chai.request(app)
        .post(signupUrl)
        .send(newUser)
        .end((error, res) => {
          expect(res).to.have.status(409);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal(resMessage.userExists);
          done();
        });
    });
  });


  describe('POST SIGN IN', () => {
    it('it should login a user with valid email and password', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(user)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.have.property('id');
          expect(res.body.payload).to.have.property('name');
          expect(res.body.payload).to.have.property('email');
          expect(res.body.payload).to.have.property('token');
          expect(res.body.payload).to.have.property('createdAt');
          expect(res.body.payload).to.have.property('updatedAt');
          done();
        });
    });

    it('it should not login a user with invalid email', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: 'johndoemail.com', // invalid login email
          password: '123456',
        })
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.equal(false);
          expect(res.body.payload[0]).to.equal(resMessage.invalidEmail);
          done();
        });
    });

    it('it should not login a user with empty email and password', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: '', // empty email
          password: '', // empty password
        })
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.equal(false);
          expect(res.body.payload[0]).to.equal(resMessage.emptyEmail);
          done();
        });
    });

    it('it should not login a user with empty password', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: 'johndoe@mail.com',
          password: '', // empty login password
        })
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.equal(false);
          expect(res.body.payload[0]).to.equal(resMessage.emptyPassword);
          done();
        });
    });

    it('it should not login a non-existent user', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: 'nonexist@mail.com', // user does not exist in database
          password: '123456',
        })
        .end((error, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.equal(false);//
          expect(res.body.message).to.equal(resMessage.signinError);
          done();
        });
    });

    it('it should not login a user with wrong password', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: 'johndoe@mail.com',
          password: '123', // incorrect password
        })
        .end((error, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal(resMessage.signinError);
          done();
        });
    });
  });
});
