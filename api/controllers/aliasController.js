'use strict';

var mongoose = require('mongoose'),
  Alias = mongoose.model('Alias');

exports.create_alias = function (req, res) {
  var new_alias = new Alias(req.body);
  new_alias.save(function (err, alias) {
    if (err)
      res.send(err);
    res.json(alias);
  });
};

exports.get_full_url = function (req, res) {
  Alias.findById(req.params.alias, function (err, alias) {
    if (err)
      res.send(err);
    res.json(alias);
  });
};

exports.update_alias = function (req, res) {
  Alias.findOneAndUpdate({ _id: req.params.alias }, req.body, { new: true }, function (err, alias) {
    if (err)
      res.send(err);
    res.json(alias);
  });
};

exports.delete_alias = function (req, res) {
  Alias.remove({
    _id: req.params.alias
  }, function (err, alias) {
    if (err)
      res.send(err);
    res.json({ message: 'Alias successfully deleted' });
  });
};
