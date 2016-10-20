var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hola bebé');
});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});//para que el reinicio del servidor de node sea automanitco se instala nodemon
//(si estas en una maquina ubuntu<sudo>)npm install -g nodemon