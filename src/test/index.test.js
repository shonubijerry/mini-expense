import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import responseMessages from '../helpers/responseMessages';

const { expect } = chai;
chai.use(chaiHttp);

const expensesUrl = '/api/v1/expenses';

describe('DEFAULT TESTS', () => {
  describe('Routes', () => {
    it('it should return route not found', (done) => {
      chai.request(app)
        .get('/nonexisting_route')
        .end((error, res) => {
          expect(res).to.have.status(404);
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal('route not found');
          done();
        });
    });

    it('it should return root endpoint', (done) => {
      chai.request(app)
        .get('/')
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.message).to.equal('Welcome to Mini Expense');
          done();
        });
    });

    it('it should not access route if token is not provided', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .end((error, res) => {
          expect(res).to.have.status(401);
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal(responseMessages.noToken);
          done();
        });
    });

    it('it Return session is invalid if no token', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .end((error, res) => {
          expect(res).to.have.status(401);
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal(responseMessages.noToken);
          done();
        });
    });

    it('it Return session is invalid if bad token', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .set('Authorization', 'Bearer invalid_session_token')
        .end((error, res) => {
          expect(res).to.have.status(401);
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal(responseMessages.invalidSession);
          done();
        });
    });

    it('it Return session is expired', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOnsiaWQiOiI2ZTA2ODllOS05NGYwLTQ2MmUtYjZlMS1jYmJlYmJkNDQ4MGIifSwiaWF0IjoxNTY5OTAwODE3LCJleHAiOjE1Njk5MDA4MTh9.H-aNNeoBgNSnBKHPW6CqIwmz5V4dk1WjKYJGS2Gs1i8')
        .end((error, res) => {
          expect(res).to.have.status(401);
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal(responseMessages.expiredSession);
          done();
        });
    });
  });
});
