const express = require('express');

const app = express();
const routes = require('./routes/index');
const port = 1245;

app.use('/', routes);

app.listen(port);
module.exports = app;
