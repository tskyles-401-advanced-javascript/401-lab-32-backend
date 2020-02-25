'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('./middleware/500');
const notFoundHandler = require('./middleware/404');

const app = express();

app.use(cors);
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server up on ${port}`);
    });
  },
};