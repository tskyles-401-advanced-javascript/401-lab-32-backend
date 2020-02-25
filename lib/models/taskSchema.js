'use strict';

const mongoose = require('mongoose');

const task = mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: Number, required: true },
  assignee: { type: String, required: true },
  completionDate: {type: String, required: true },
});

module.exports = mongoose.model('task', task);