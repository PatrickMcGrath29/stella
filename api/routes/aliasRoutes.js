'use strict';
module.exports = function (app) {
  var alias = require('../controllers/aliasController');

  app.route('/')
    .post(alias.create_alias);

  app.route('/:alias')
    .get(alias.get_full_url)
    .put(alias.update_alias)
    .delete(alias.delete_alias);
};
