'use strict';

const db = require('../config/db')
const moment = require('moment');

db.query(`create table if not exists banking(
  id VARCHAR(100),
  createdAt VARCHAR(100),
  desc VARCHAR(100),
  type VARCHAR(100),
  amount INT
)`);

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('select * from banking', function(err, transactions){
      if(err){
        resolve(transactions);
      }else{
        reject(err);
      }
    });
  });
}


exports.add = newTransactionObj => {
  return new Promise((resolve, reject) => {
    newTransactionObj.createdAt = moment().toISOString();

    db.query('insert into banking set ?', newTransactionObj, function(err, transactions){
      if(err){
        reject(err);
      }else{
        resolve(transactions);
      }
    })

  })
}
