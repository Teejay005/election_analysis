'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StateSchema = new Schema({
  name: String,
  zone: String
});

module.exports = mongoose.model('State', StateSchema);
