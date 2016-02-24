var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/node_version/code', function(req, res, next) {
  res.render('code', { title: 'Express' });
});

router.get('/node_version/artdesign', function(req, res, next) {
  res.render('artdesign', { title: 'Express' });
});

router.get('/node_version/writing', function(req, res, next) {
  res.render('writing', { title: 'Express' });
});

router.get('/node_version/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});



router.get('/node_version/test', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

module.exports = router;
