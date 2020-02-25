'use strict';

const DataModel = require('@tskyles/mongo-model');
const schema = require('./taskSchema');

class Task extends DataModel{
  constructor(schema){
    super(schema);
  }
}

module.exports = new Task(schema);