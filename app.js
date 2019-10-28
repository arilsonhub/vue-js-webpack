//Imports
const http = require('http');
const express = require('express');
const app = express();
const logger = require('morgan');
const helmet = require('helmet');
const path = require('path');

//Configuration
const port = process.env.PORT || 4000;
app.use(logger('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname,"/dist/static/"))); 

app.get('/', function(req,res) {
   res.sendFile('index.html', { root: path.join(__dirname, '/dist/') });
});

var server = http.createServer(app);
server.listen(port);