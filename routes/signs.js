var express = require('express');
var router = express.Router();
const Signs = require('../controllers/signs/sign');

const routes = {
    signsGetAll: '/signs/getAll',
    signsGetOne: '/signs/getOne/:id',
    signsSave: '/signs/save',
    signsDelete: '/signs/delete',
    signsUpdate: '/signs/update',
}

router.get(routes.signsGetAll, function(req, res, next) {
    Signs.getAll(req, res);
});

router.get(routes.signsGetOne, function(req, res, next) {
    Signs.getOne(req, res);
});


router.post(routes.signsSave, function(req, res, next) {

    if(!req){
        console.log("=====================================================================")
        console.log(" ERROR al querer meter "+req.name)
        console.log("=====================================================================")

    }
    //     let item = {
    //     id: req.params.id,
    //     name: req.params.name,
    //     category_id: req.params.category_id,
    //     sign: req.params.sign,
    //     description: req.params.description,
    //     image: req.params.image,
    // }
    //  //JSON
    let item = {
        id: req.body.id,
        name: req.body.name,
        category_id: req.body.category_id,
        sign: req.body.sign,
        description: req.body.description,
        image: req.body.image,
    }
    console.log("=====================================================================")
    // console.log(item);
    console.log(req.body.Signs);
    Signs.save(item, res);
    console.log("=====================================================================")

});

router.delete(routes.signsDelete, function(req, res, next) {
    let item = {
        id: req.params.id,
    }
    Signs.delete(item, res);
});

router.patch(routes.signsUpdate, function(req, res, next) {

    let item = {
        id: req.params.id,
        name: req.params.name,
        category_id: req.params.category_id,
        sign: req.params.sign,
        description: req.params.description,
        image: req.params.image,
    }
    Signs.update(item, res);
});

module.exports = router;
