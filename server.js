var express = require("express");
var app = express();

var Logger = require('./my_classes/utils/Logger.js');

app.get('/', (req,res)=>{
	Logger.debug("Oscar");
	res.send("Hello");
});

var server= app.listen(9002, ()=>{
	console.log('New local server for Bragi Tools is ready at port 9002');
});