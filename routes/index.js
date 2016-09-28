var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome',
  message: 'this is the website about my family!'});
});


router.get('/sam', function(req, res, next) {
  res.render('index', { title: 'Sam',
    message: 'Sam is a manager at peoples jeweler, she is pretty awesome'});
});

router.get('/steve', function(req, res, next) {
  res.render('index', { title: 'Steve',
    message: 'Steve is my dad, he is a retired dental surgion, he now spends his time sailing arround'});
});

router.get('/tom', function(req, res, next) {
  res.render('index', { title: 'Tom',
    message: 'Tom is an english professor, his hobbies are partying... weridly enough'});
});

router.get('/ben', function(req, res, next) {
  res.render('index', { title: 'Ben',
    message: 'I am a computer programmer at a local areospace research lab, I make space lamps'});
});

router.get('/heather', function(req, res, next) {
  res.render('index', { title: 'heather',
    message: 'heather is my mom, she is a retired phd microbiologist, and now teaches highschool'});
});


module.exports = router;
