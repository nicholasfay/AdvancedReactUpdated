//Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB setup - creates a db within mongodb called auth (named from the /auth)
mongoose.connect('mongodb://localhost:27017/auth');

//App setup

//Express middleware

//Morgan is a logging framework for incoming requests, mainly used for debugging
app.use(morgan('combined'));

//Parses incoming requests into json regardless of its type (change type to change this)
app.use(bodyParser.json({type: '*/*'}));

//Allows CORS requests to make local development easier
app.use(cors());

router(app);


//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);