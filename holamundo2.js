var http = require("http"); //requiere librerias de http

http.createServer(function(request,resposne){
    resposne.writeHead(200,{"Content-Type": "texte/plain"});
    resposne.write("HOLA MUNDO");
    resposne.end();

}).listen(8080);