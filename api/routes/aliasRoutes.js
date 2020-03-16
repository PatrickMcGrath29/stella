'use strict';
module.exports = (app) => {
  const alias = require('../controllers/aliasController');

  app.route('/alias/')
    .post(alias.create_alias);

  app.route('/alias/:alias')
    .get(alias.get_full_url)
    .delete(alias.delete_alias);
};
