
var express = require('express');
var restful = require('node-restful');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.methodOverride())

mongoose.connect('mongodb://192.168.99.100/restful');

var ProductSchema = mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

var Products = restful.model('products', ProductSchema);
Products.methods(['get', 'put', 'post', 'delete']);
Products.register(app, '/api/products');

app.listen(4000);
console.log('Server is listening at port : 4000');
