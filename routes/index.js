var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test_1', function(req, res, next) {
  res.json({message: 'alive'});
});

module.exports = router;
