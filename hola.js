var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/saludo', c_saludo);


function c_inicio(request, response){
    response.send('Bienvenido EXPRESS-UTEC');
}
function c_saludo(request, response){
    response.send('Saludo');
}

function c_server(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Escuchando en Puerto https://%s:%s",host,port);
}

var server = app.listen(3000, c_server);