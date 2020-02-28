'use strict';

const mongoose = require('mongoose'),
  crypto = require('crypto'),
  Alias = mongoose.model('Alias');

const genericError = (res) => res.status(400).json({ "errorMessage": "Invalid Request" })
const notFoundError = (res) => res.status(404).json({ "errorMessage": "Alias Not Found" })
const duplicateError = (res) => res.status(400).json({ "errorMessage": "Requested alias is unavailable" })
const validationError = (res, err) => res.status(400).json({ "errorMessage": err._message })

exports.create_alias = (req, res) => {
  const new_alias = new Alias(req.body)
  new_alias.secret_id = new_alias.secret_id || crypto.randomBytes(20).toString("hex")

  new_alias.save((err, alias) => {
    console.log("---")
    console.log(err)
    if (err) {
      if (err.code === 11000) return duplicateError(res)
      if (err.name === "ValidationError") return validationError(res, err)
      return genericError(res)
    }
    res.json(alias.toJSON({ keep: "secret_id" }));
  });
};

exports.get_full_url = (req, res) => {
  Alias.findOne({ alias: req.params.alias }, (err, alias) => {
    if (err) return genericError(res)
    if (!alias) return notFoundError(res)

    if (req.query.redirect == "true") {
      res.redirect(alias.full_url)
    } else {
      res.json(alias);
    }
  });
};

exports.delete_alias = (req, res) => {
  Alias.deleteOne({
    alias: req.params.alias,
    secret_id: req.query.secret_id
  }, (err, alias) => {
    if (err) return genericError(res)
    if (alias.deletedCount === 0) return notFoundError(res)

    res.json({ message: 'Alias successfully deleted' });
  });
};
