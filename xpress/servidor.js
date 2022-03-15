//https://www.npmjs.com/package/express

var expreso = require("express");
var aplicacion = expreso();

aplicacion.get('/', inicio);
aplicacion.get('/', curso);


function inicio (peticion, resultado)
{
    resultado.send("Este es el <strong> Home SISSSSI</strong>")
}

function curso (peticion, resultado)
{
    resultado.send("Este es el <strong> CURSO</strong>")
}


aplicacion.listen(8989);