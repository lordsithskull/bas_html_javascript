var teclas = { //SE GENERA UN OBJETO USANDO NOTACION DE JSON
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado); //se agregag un listener para detectar teclas presionadas

function dibujarTeclado(evento) //Se genera el primer evento 
{
    if(evento.keyCode == teclas.UP)
    {
        console.log("Vamos pa arriba");
    }

    else if(evento.keyCode == teclas.DOWN)
    {
        console.log("Vamos pa bajo");
    }
    
    else if(evento.keyCode == teclas.LEFT)
    {
        console.log("Vamos pa la izquierda");
    }

    else if(evento.keyCode == teclas.RIGHT)
    {
        console.log("Vamos pa la derecha");
    }
}