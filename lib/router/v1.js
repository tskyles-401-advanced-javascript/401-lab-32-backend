'use strict';

const express = require('express');
const router = express.Router();

const task = require('../models/taskModel');

router.get('/api/v1/todo', handleGetAll);
router.post('/api/v1/todo', handlePost);
router.get('/api/v1/todo', handleGetOne);
router.delete('/api/v1/todo', handleDelete);

function handleGetAll(req, res, next){
  req.params.get()
    .then(records => {
      const output = {
        count: records.length,
        results: records,
      };
      res.status(200).json(output);
    })
    .catch(error => new Error('error fetching data'));
}

function handlePost(req, res, next){
  req.model.post(req.body)
    .then(result => res.status(200).json(result))
    .catch(error => new Error('error posting data'));
}

function handleGetOne(req, res, next){
  let id = req.params.id;
  req.params.get(id)
    .then(records => {
      const output = {
        count: records.length,
        results: records,
      };
      res.status(200).json(output);
    })
    .catch(error => new Error('error fetching data'));
}

function handleDelete(req, res, next){
  let id = req.params.id;
  req.model.delete(id)
    .then(result => res.status(200).json(result))
    .catch(error => new Error('error deleting data'));
}

module.exports = router;