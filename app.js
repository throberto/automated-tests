var express = require('express');
var app = express();
var calculator = require('./src/Calculator');

app.get('/', function (req, res) {
  res.send(`Hello World! The sum of 2 + 2 is: ${calculator.sum(2, 2)}`);
});

app.listen(5000, function () {
  console.log('🚀 Servidor rodando na porta 5000');
});