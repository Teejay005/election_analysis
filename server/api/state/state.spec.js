'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('states', function () {


  describe('GET /api/states', function () {

    it('should respond with JSON array', function (done) {
      request(app)
        .get('/api/states')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          done();
        });
    });
  });

  describe('POST /api/states', function () {

    it('should create state', function (done) {
      request(app)
        .post('/api/states')
        .send({name: 'Ondo', zone: 'South West'})
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) return done(err);
          res.body.should.have.property('_id');
          done();
        });
    });
  });
});
