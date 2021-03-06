require('dotenv').config()
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Alias = require('./api/models/aliasModel').default,
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_STRING);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))
const routes = require('./api/routes/aliasRoutes');
routes(app);
app.listen(port);
