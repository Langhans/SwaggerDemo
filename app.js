var app = require('express')();
var parser = require('body-parser');
var db = require('./db');
var User = require('./models/user');
var swaggerJSDoc = require('swagger-jsdoc');
var routes = require('./routes/index');
var path = require('path');
var express = require('express');
// swagger definition
var swaggerDefinition = {
  info: {
    title: 'User Swagger API',
    version: '1.0.0',
    description: 'Demo',
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

var swaggerSpec = swaggerJSDoc(options);

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.get('/swagger.json' , function(req,res){
  res.setHeader('Content-Type' , 'application/json');
  res.send(swaggerSpec);
});

app.use(parser.json());

app.listen(3000);

app.get("/" , function(req , res){
  res.send("Hello World!");
});




module.export = app
