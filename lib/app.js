'use strict';

const task = require('./models/taskModel');
const errorHandler = require('./middleware/500');
const notFoundHandler = require('./middleware/404');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/v1/todo', (req, res) => {
  task.get()
    .then(records => {
      const output = {
        count: records.length,
        results: records,
      };
      res.send(output);
    })
    .catch(error => console.error(error));
});

app.post('/api/v1/todo', (req, res) => {
  task.post(req.body)
    .then(result => res.send(result))
    .catch(error => console.error(error));
});

app.get('/api/v1/todo/:id', (req, res, next) => {
  let id = req.params.id;
  task.get(id)
    .then(records => {
      const output = {
        count: records.length,
        results: records,
      };
      res.send(output);
    })
    .catch(error => console.error(error));
});

app.delete('/api/v1/todo:id', (req, res, next) => {
  let id = req.params.id;
  task.delete(id)
    .then(result => res.send(result))
    .catch(error => console.error(error));
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server up on ${port}`));
  },
};