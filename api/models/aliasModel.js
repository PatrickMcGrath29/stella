'use strict';
require("mongoose-type-url")
const mongoose = require('mongoose'),
  privatePaths = require('mongoose-private-paths');
const Schema = mongoose.Schema;

const AliasSchema = new Schema({
  alias: {
    type: String,
    required: 'Alias Name Required',
    unique: true
  },
  created_date: {
    type: Date,
    default: Date.now,
    private: true
  },
  secret_id: {
    type: String,
    private: true
  },
  full_url: {
    type: mongoose.SchemaTypes.Url,
    required: 'Full URL Required'
  }
});

AliasSchema.plugin(privatePaths)
module.exports = mongoose.model('Alias', AliasSchema);
