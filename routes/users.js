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

router.get('/users/getOne/:id', function(req, res, next) {
  User.getOne(req, res);
});

router.delete('/users/delete', function(req, res, next) {
  User.deleteItem(req, res);
});


router.post('/users/userid', function(req, res, next) {
  console.log(req.body)
  let item = {
      id: req.body.id
  }
  User.findId(item, res);
});

router.patch('/users/update', (req, res) => {
  console.log(req.body)
  let item = {
    id: req.body.id,
    name: req.body.name,
    rol_id: req.body.rol_id
  }
  User.update(item, res);
})

router.post('/users/save', function(req, res, next) {
  if(!req){
      console.log("=====================================================================")
      console.log(" ERROR al querer meter "+req.name)
      console.log(req.body.id);
      console.log(req.body.name);
      console.log(req.body.rol_id);
      console.log(req.body.password);
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
  console.log(req.body.id);
  console.log(req.body.name);
  console.log(req.body.rol_id);
  console.log(req.body.password);
  console.log("=====================================================================")
  User.save(item, res);

});

module.exports = router;
