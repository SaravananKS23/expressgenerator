var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    statusCode:201,
    message:"Love u Express2"
  });
});

module.exports = router;
