'use strict';

const DataModel = require('@tskyles/mongo-model');
const schema = require('./taskSchema');

class Task extends DataModel{
  constructor(){
    super(schema);
  }
}

module.exports = Task;