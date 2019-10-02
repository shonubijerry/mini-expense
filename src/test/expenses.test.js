import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import resMessage from '../helpers/responseMessages';

const { expect } = chai;
chai.use(chaiHttp);

const expensesUrl = '/api/v1/expenses';
const signinUrl = '/api/v1/auth/signin';
let currentToken;
const expense = {
  amount: '100',
  date: '2019-11-27T08:42:00.000Z',
  reason: 'To blow it'
};
const validUser = {
  email: 'johndoe@mail.com',
  password: '123456',
};

describe('EXPENSE CONTROLLER', () => {
  it('it should not post an expense for unauth user', (done) => {
    chai.request(app)
      .post(expensesUrl)
      .send(expense)
      .end((error, res) => {
        expect(res).to.have.status(401);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal(resMessage.noToken);
        done();
      });
  });
  describe('POST EXPENSE', () => {
    before((done) => {
      chai.request(app)
        .post(signinUrl)
        .send(validUser)
        .end((error, res) => {
          currentToken = res.body.payload.token;
          done();
        });
    });
    it('should respond with status 201 and expense data', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .set('Authorization', currentToken)
        .send(expense)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('success', true);
          expect(res.body.payload.reason).to.equal(expense.reason);
          done();
        });
    });

    it('should respond with error for empty field', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .set('Authorization', currentToken)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('success', false);
          expect(res.body.payload[0]).to.equal('amount is required');
          done();
        });
    });
  });
});
