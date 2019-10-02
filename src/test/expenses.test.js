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
  email: 'iwobi@mail.com',
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
          expect(res.body.payload[0]).to.equal(resMessage.invalidAmount);
          done();
        });
    });

    it('should respond with error for invalid amount', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .send({
          amount: '100 AUS',
          date: '2019-11-27T08:42:00.000Z',
          reason: 'To blow it'
        })
        .set('Authorization', currentToken)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('success', false);
          expect(res.body.payload[0]).to.equal(resMessage.invalidAmount);
          done();
        });
    });

    it('should respond with error for past date', (done) => {
      chai.request(app)
        .post(expensesUrl)
        .send({
          amount: '100 EUR',
          date: '2018-11-27T08:42:00.000Z',
          reason: 'To blow it'
        })
        .set('Authorization', currentToken)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('success', false);
          expect(res.body.payload[0]).to.equal(resMessage.invalidDate);
          done();
        });
    });
  });

  describe('GET ONE EXPENSE', () => {
    before((done) => {
      chai.request(app)
        .post(signinUrl)
        .send(validUser)
        .end((error, res) => {
          currentToken = res.body.payload.token;
          done();
        });
    });
    it('should respond with status 200 and expense data', (done) => {
      chai.request(app)
        .get(`${expensesUrl}/389bd933-3838-4104-b5cd-6374819ee563`)
        .set('Authorization', currentToken)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('success', true);
          expect(res.body.payload.reason).to.equal('Trip to grandma\'s');
          expect(res.body.payload.amount).to.equal(350);
          done();
        });
    });

    it('should respond with error for invalid expense id', (done) => {
      chai.request(app)
        .get(`${expensesUrl}/yttty-3838-4104-b5cd-6374819ee563hhjhhh`)
        .set('Authorization', currentToken)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('success', false);
          expect(res.body.payload[0]).to.equal(resMessage.invalidId);
          done();
        });
    });
  });

  describe('GET EXPENSES', () => {
    before((done) => {
      chai.request(app)
        .post(signinUrl)
        .send(validUser)
        .end((error, res) => {
          currentToken = res.body.payload.token;
          done();
        });
    });
    it('should respond with status 200 and expense data', (done) => {
      chai.request(app)
        .get(expensesUrl)
        .set('Authorization', currentToken)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('success', true);
          expect(res.body.payload[1].reason).to.equal('Purchase a TV set');
          expect(res.body.payload[1].amount).to.equal(200);
          done();
        });
    });
  });
});
