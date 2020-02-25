'use strict';

require('dotenv').config();
const server = require('./lib/app');
const mongoose = require('mongoose');

const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI, options)
  .catch(err => console.log(err));

server.start(process.env.PORT);