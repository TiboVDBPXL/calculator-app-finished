const express = require('express');
const routes = require('./routes');
const path = require('path')

const app = express();

const mydotenv = require('dotenv').config(path: '/opt/.env');
console.log("env" + mydotenv);
console.log("env logging:" + process.env.PORT);

app.use(express.static(path.join(__dirname, 'public')))
app.use('/calc', routes);

module.exports = app    
