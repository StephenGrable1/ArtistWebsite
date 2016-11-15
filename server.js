var express = require('express');
var logger = require('morgan');
var app = express();
var template = require('jade').compileFile(__dirname + '/src/templates/index.jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res, next) {
  try {
    var html = template({title: 'Home'})
    res.send(html)
  } catch(e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3030, function() {
  console.log('Live on Port: ' + (process.env.PORT || 3030));
})
