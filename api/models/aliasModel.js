'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AliasSchema = new Schema({
  alias: {
    type: String,
    required: 'Alias Name Required',
    unique: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  secret_id: {
    type: String
  },
  full_url: {
    type: String,
    required: 'Full URL Required'
  }
});

module.exports = mongoose.model('Alias', AliasSchema);
