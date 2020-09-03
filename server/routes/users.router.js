const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();




// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {

  let queryText = `SELECT * FROM "user";`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows)
  }).catch(error => {
    console.log(error => {
      console.log(error);
      res.sendStatus(500);
    })
  })
});



module.exports = router;