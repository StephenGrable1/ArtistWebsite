var express = require('express');
var logger = require('morgan');
var app = express();
var template = require('pug').compileFile(__dirname + '/src/templates/index.pug');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/media'))
app.use(express.static(__dirname + '/js'))

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
