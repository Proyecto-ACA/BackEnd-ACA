var express = require('express');
var router = express.Router();
const User = require('../controllers/users/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users/user', function(req, res, next) {
  console.log(req.body)
  let item = {
      name: req.body.name
  }
  User.findUser(item, res);
});

router.post('/users/userid', function(req, res, next) {
  console.log(req.body)
  let item = {
      id: req.body.id
  }
  User.findId(item, res);
});

module.exports = router;
