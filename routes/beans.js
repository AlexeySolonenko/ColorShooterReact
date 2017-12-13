var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  res.json([{
    id: 1, 
    beanKind: "white"
  }, { 
    id: 2,
    beanKind: "black"
  }])
});

module.exports = router;
