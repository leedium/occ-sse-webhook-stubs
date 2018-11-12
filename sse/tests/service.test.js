/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/* global describe, after it, before */

const http = require('http');
const expect = require('expect.js');
const supertest = require('supertest');

const constants = require('../constants');
const config = require('../config.json');
const readJSONFile = require('../core/helpers').readJSONFile;

describe('====== Utility Routes ======', function () {
  let app;
  before(function () {
    app = require('../index');
    app.server = http.createServer(app);
    app.server.listen(constants.NODE_EXTENSION_TEST_PORT, function (err) {
      if (err) {
        console.log('SSE_ERROR ');
      }
    });
  });
  after(function () {
    app.server.close();
  });

  /**
   * Test SSE Version is installed and valid.
   */
  it('- Returns a SSE version\n', function (done) {
    supertest(app)
      .get(`${constants.ROUTE_BASE}/version`)
      .set({'env': 'true'})
      .expect(constants.HTTP_RESPONSE_SUCCESS)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        expect(res.body).to.have.property('version');
        done();
      });
  }).timeout(config.testTimeout);

  /**
   * Tests a vaild Response from the live endpoint
   * Live Endpoint : for URL see constants.SEARCH_ENDPOINT
   */
  it(`- Returns a external price \n\t${constants.SAY_HELLO} \n\t- response\n`, function (done) {
    global.testMode = false;
    let payload = readJSONFile(`../${config.testFolder}/json/serviceBasic-test-req.json`);
    supertest(app)
      .post(`${constants.ROUTE_BASE}${constants.SSE_ENDPOINT_EXTERNAL_PRICE}`)
      .set({'env': 'preview'})
      .send(payload)
      .expect(constants.HTTP_RESPONSE_SUCCESS)
      .end(function (err, res) {
        if (err) {
          done(err);
          return;
        }
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be('hello LEEDIUM');
        done();
      });
  }).timeout(config.testTimeout);

  /**
   * Tests a vaild Response from the live endpoint
   * Live Endpoint : for URL see constants.SEARCH_ENDPOINT
   */
  it(`- Returns a external price validation \n\t${constants.SAY_HELLO} \n\t- response\n`, function (done) {
    global.testMode = false;
    let payload = readJSONFile(`../${config.testFolder}/json/serviceBasic-test-req.json`);
    supertest(app)
      .post(`${constants.ROUTE_BASE}${constants.SSE_ENDPOINT_EXTERNAL_PRICE_VALIDATION}`)
      .set({'env': 'preview'})
      .send(payload)
      .expect(constants.HTTP_RESPONSE_SUCCESS)
      .end(function (err, res) {
        if (err) {
          done(err);
          return;
        }
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be('hello LEEDIUM');
        done();
      });
  }).timeout(config.testTimeout);

  /**
   * Tests a vaild Response from the live endpoint
   * Live Endpoint : for URL see constants.SEARCH_ENDPOINT
   */
  it(`- Returns a external promotion \n\t${constants.SAY_HELLO} \n\t- response\n`, function (done) {
    global.testMode = false;
    let payload = readJSONFile(`../${config.testFolder}/json/serviceBasic-test-req.json`);
    supertest(app)
      .post(`${constants.ROUTE_BASE}${constants.SSE_ENDPOINT_EXTERNAL_PROMOTIONS}`)
      .set({'env': 'preview'})
      .send(payload)
      .expect(constants.HTTP_RESPONSE_SUCCESS)
      .end(function (err, res) {
        if (err) {
          done(err);
          return;
        }
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be('hello LEEDIUM');
        done();
      });
  }).timeout(config.testTimeout);

  /**
   * Tests a vaild Response from the live endpoint
   * Live Endpoint : for URL see constants.SEARCH_ENDPOINT
   */
  it(`- Returns a external shipping  \n\t${constants.SAY_HELLO} \n\t- response\n`, function (done) {
    global.testMode = false;
    let payload = readJSONFile(`../${config.testFolder}/json/serviceBasic-test-req.json`);
    supertest(app)
      .post(`${constants.ROUTE_BASE}${constants.SSE_ENDPOINT_EXTERNAL_SHIPPING}`)
      .set({'env': 'preview'})
      .send(payload)
      .expect(constants.HTTP_RESPONSE_SUCCESS)
      .end(function (err, res) {
        if (err) {
          done(err);
          return;
        }
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be('hello LEEDIUM');
        done();
      });
  }).timeout(config.testTimeout);
});
