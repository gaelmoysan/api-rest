//imports
var express = require('express');


//intentiate server
var server = express();

//configure routes
server.get('/', function(req, res){
	res.setHeader('Content-Type','text/html');
	res.status(200).send('<h1>Hello world</h1>');
});
//launch server
server.listen(8080, function(){
	console.log('serveur en écoute');
});