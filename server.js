var express = require("express");
var app = express();

var Logger = require('./my_classes/utils/Logger.js');

app.get('/', (req,res)=>{
	Logger.debug("Oscar");
	res.send('<h1 align="center">Me la pelas Bryan y Aaron se la come</h1>');
});

var server= app.listen(process.env.PORT || 3000, ()=>{
	console.log('New local server for Bragi Tools is ready at port 3000');
});