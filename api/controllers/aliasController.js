'use strict';

const mongoose = require('mongoose'),
  crypto = require('crypto'),
  Alias = mongoose.model('Alias');

const notFoundBody = { "errorMessage": notFoundMessage }

exports.create_alias = (req, res) => {
  const new_alias = new Alias(req.body)
  new_alias.secret_id = new_alias.secret_id || crypto.randomBytes(20).toString("hex")
  new_alias.save((err, alias) => {
    if (err) return res.send(err);
    res.json(alias);
  });
};

exports.get_full_url = (req, res) => {
  Alias.findOne({ alias: req.params.alias }, (err, alias) => {
    if (err) return res.send(err);
    if (!alias) return res.status(404).json(notFoundBody);

    if (req.query.redirect == "true") {
      res.redirect(alias.full_url)
    } else {
      res.json(alias);
    }
  });
};

exports.update_alias = (req, res) => {
  Alias.findOneAndUpdate({
    alias: req.params.alias,
    secret_id: req.query.secret_id
  }, req.body, { new: true }, (err, alias) => {
    if (err) return res.send(err);
    res.json(alias);
  });
};

exports.delete_alias = (req, res) => {
  Alias.deleteOne({
    alias: req.params.alias,
    secret_id: req.query.secret_id
  }, (err, alias) => {
    if (err) return res.send(err);
    if (alias.deletedCount === 0) return res.status(404).json(notFoundBody);

    res.json({ message: 'Alias successfully deleted' });
  });
};
