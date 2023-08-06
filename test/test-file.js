// test/test-file.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../Server/server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Random Quote API', () => {
    let server; // Declare the server variable

    before((done) => {
        // Start the server before running the tests
        server = app.listen(3000, () => {
            console.log('Server is listening on port 3000');
            done();
        });
    });

    after((done) => {
        // Stop the server after the tests are completed
        server.close(() => {
            console.log('Server is closed');
            done();
        });
    });

    // Your test cases go here...
    it('should return a random quote', (done) => {
        chai.request(app)
            .get('/api/random-quote')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('text').that.is.a('string');
                done();
            });
    });
});
