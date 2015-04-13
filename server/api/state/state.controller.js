'use strict';

var _ = require('lodash');
var State = require('./state.model');

exports.index = function(req, res) {
  State.find(function (err, states) {
    if(err) { return handleError(res, err); }
    return res.json(200, states);
  });
};

exports.show = function(req, res) {
  State.findById(req.params.id, function (err, state) {
    if(err) { return handleError(res, err); }
    if(!state) { return res.send(404); }
    return res.json(state);
  });
};

exports.create = function(req, res) {
  State.create(req.body, function(err, state) {
    if(err) { return handleError(res, err); }
    return res.json(201, state);
  });
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  State.findById(req.params.id, function (err, state) {
    if (err) { return handleError(res, err); }
    if(!state) { return res.send(404); }
    var updated = _.merge(state, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, state);
    });
  });
};

exports.destroy = function(req, res) {
  State.findById(req.params.id, function (err, state) {
    if(err) { return handleError(res, err); }
    if(!state) { return res.send(404); }
    state.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
