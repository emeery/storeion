var express = require('express');
const bodyparser = require('body-parser')

const productRouter = require('./src/controllers/product')
var app = express();


app.use('/product', productRouter)
module.exports = app



