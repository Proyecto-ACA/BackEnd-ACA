//Importamos el framework express
var express = require('express');

//Aqui creamos el objeto router que nos permitira utilizar los metodos http
//Para comunicarnos con la base de datos
var router = express.Router();

//Importamos el controlador de rol que esta en la carpeta controllers
const User = require('../controllers/users/user');

//Utilizamos el objeto router creado anteriormente e invocamos el metodo get para poder hacer peticiones
// a la base de datos, los parametros que recibe son: la ruta que queremos que active esa peticion en especifico
//y una funcion que llamara al metodo send
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Utilizamos el objeto router con el metodo post para mandar a llamar al metodo post que busca un nuevo rol en la
//base de datos, los argumentos que recibe son: la ruta en la que queremos que se realice la peticion y una funcion
//que llama al metodo finUser para poder buscar cosas en la base de datos.
router.post('/users/user', function(req, res, next) {
  console.log(req.body)
  let item = {
      name: req.body.name
  }
  User.findUser(item, res);
});

//Este metodo get nos sirve para traer de la base de datos todos los usuarios que existen
router.get('/users/getAll', function(req, res, next) {
  User.getAll(req, res);
});

//Este metodo get nos sirve para traer de la base de datos un usuarion en especifico
//basado en su id
router.get('/users/getOne/:id', function(req, res, next) {
  User.getOne(req, res);
});

//Este metodo delete nos sirve para borrar de la base de datos un usuario en especifico
//basado en su id
router.delete('/users/delete', function(req, res, next) {
  User.deleteItem(req, res);
});

//Este metodo post nos sirve para agregar un usuario a la base de datos
router.post('/users/userid', function(req, res, next) {
  console.log(req.body)
  let item = {
      id: req.body.id
  }
  User.findId(item, res);
});

//Este metodo nos sirve para modificar un usuario de la base de datos
router.patch('/users/update', (req, res) => {
  console.log(req.body)
  let item = {
    id: req.body.id,
    name: req.body.name,
    rol_id: req.body.rol_id
  }
  User.update(item, res);
})

//Este metodo nos sirve para agregar un usuario en la base de datos
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

//Exportamos los metodos
module.exports = router;
