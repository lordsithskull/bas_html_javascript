var express = requiere("express");
var aplicacion = express();

aplicacion.get('/', inicio);
aplicacion.get('/', cursos);

function inicio (peticion, resultado)
{
    resultado.send("Este es el <strong> Home</strong>")
}

function cursos (peticion, resultado)
{
    resultado.send("Estos son los <strong>Cursos</strong>")
}