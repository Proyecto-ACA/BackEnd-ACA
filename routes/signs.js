var express = require('express');
var router = express.Router();
const Signs = require('../controllers/signs/sign');

const routes = {
    signsGetAll: '/signs/getAll',
    signsSave: '/signs/save',
    signsDelete: '/signs/delete',
    signsUpdate: '/signs/update',
}

router.get(routes.signsGetAll, function(req, res, next) {
    Signs.getAll(req, res);
});

router.post(routes.signsSave, function(req, res, next) {
    let item = {
        Signs: req.body.Signs,
        name: req.body.name,
    }
    console.log(item);
    console.log(req.body.Signs);
    Signs.save(item, res);
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
        Signs: req.params.Signs,
        name: req.params.name,
    }
    Signs.update(item, res);
});

module.exports = router;
