var express = require("express");
var app = express();

app.get('/', (req,res)=>{
	res.send("Hello");
});

var server= app.listen(9002, ()=>{
	console.log('New local server for sacramentoapp is ready at port 9002');
});