'use strict';

const mongoose = require('mongoose');

const task = mongoose.Schema({
  text: {type: String},
  assignee:{ type: String},
  due: { type: String},
  difficulty: {type: String},
  complete: { type: Boolean, default: false},
});

module.exports = mongoose.model('task', task);