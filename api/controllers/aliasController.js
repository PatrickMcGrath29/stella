'use strict';

const mongoose = require('mongoose'),
  crypto = require('crypto'),
  Alias = mongoose.model('Alias');

exports.create_alias = (req, res) => {
  const new_alias = new Alias(req.body)
  new_alias.secret_id = new_alias.secret_id || crypto.randomBytes(20).toString("hex")
  new_alias.save((err, alias) => {
    if (err) res.send(err);
    res.json(alias);
  });
};

exports.get_full_url = (req, res) => {
  Alias.find({ alias: req.params.alias }, (err, alias) => {
    if (err) res.send(err);
    res.json(alias);
  });
};

exports.update_alias = (req, res) => {
  Alias.findOneAndUpdate({ _id: req.params.alias }, req.body, { new: true }, (err, alias) => {
    if (err) res.send(err);
    res.json(alias);
  });
};

exports.delete_alias = (req, res) => {
  Alias.remove({
    alias: req.params.alias,
    secret_id: req.params.secret_id
  }, (err, alias) => {
    if (err) res.send(err);
    res.json({ message: 'Alias successfully deleted' });
  });
};
