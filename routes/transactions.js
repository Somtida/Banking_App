'use strict';

const express = require('express');

let router = express.Router();

let Mybank = require('../models/transaction');

router.get('/', (req, res) => {
  Mybank.getAll()
    .then(transactions => {
      res.send(transactions);
    })
    .catch(err => {
      res.status(400).send(err);
    })
});

router.post('/', (req, res) => {
  Mybank.add(req.body)
    .then(transactions => {
      res.send(transactions);
    })
    .catch(err => {
      res.status(400).send(err);
    })
})
