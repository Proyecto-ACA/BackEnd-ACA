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

router.get('/users/getAll', function(req, res, next) {
  User.getAll(req, res);
});

router.post('/users/userid', function(req, res, next) {
  console.log(req.body)
  let item = {
      id: req.body.id
  }
  User.findId(item, res);
});
router.post('/users/save', function(req, res, next) {
  if(!req){
      console.log("=====================================================================")
      console.log(" ERROR al querer meter "+req.name)
      console.log("=====================================================================")

  }
  let item = {
      id: req.body.id,
      name: req.body.name,
      rol_id: req.body.rol_id,
      password:req.body.password
  }
  console.log("=====================================================================")
  // console.log(item);
  console.log(req.body.Signs);
  console.log("=====================================================================")
  Signs.save(item, res);

});

module.exports = router;
