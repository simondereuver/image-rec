// test/test-file.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../Server/server');

// Configure Chai to use the chai-http plugin
chai.use(chaiHttp);
const expect = chai.expect;

describe('Random Quote API', () => {
    before((done) => {
        // The server is started in the server.js file, no need to start it again here
        done();
    });

    after((done) => {
        // Close the server after the tests are completed
        app.close(() => {
            console.log('Server is closed');
            done();
        });
    });

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
