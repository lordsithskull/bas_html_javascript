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
    console.log(evento.keyCode);    
}