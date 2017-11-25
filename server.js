const express = require("express");
const app = express();
const DatabaseConnector = require('./my_classes/utils/DatabaseConnector');

const Logger = require('./my_classes/utils/Logger.js');

app.get('/', (req,res)=>{
	Logger.debug("Oscar");

    var conn = DatabaseConnector.getDatabaseConnection();
    conn.insertUsuario('users',{name:"oscarsanabria28",
        password: "123*",
        mail:"oscarsanabria28@gmail.com",
        role:"MASTER",
        createdById:0});
    conn.close();

	res.send('<h1 align="center">Me la pelas Bryan y Aaron se la come</h1>');
});

var server= app.listen(process.env.PORT || 3000, ()=>{
	console.log('New local server for Bragi Tools is ready at port 3000');
});