import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

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
  });
});
