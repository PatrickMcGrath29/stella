'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AliasSchema = new Schema({
  alias: {
    type: String,
    required: 'Alias Name Required',
    unique: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  full_url: {
    type: String,
    required: 'Full URL Required'
  }
});

module.exports = mongoose.model('Alias', AliasSchema);
