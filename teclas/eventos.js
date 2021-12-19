var teclas = { //SE GENERA UN OBJETO USANDO NOTACION DE JSON
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
};

document.addEventListener("keyup", dibujarTeclado); //se agregag un listener para detectar teclas presionadas
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
dibujarLinea("red",100,100,200,200,papel); //Linea de prueba para verificar que canvas funciona

function dibujarLinea(color,xinicial, yinicial,xfinal,yfinal, lienzo)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial,yinicial); //punto de origen
        lienzo.lineTo(xfinal,yfinal); //punto final
        lienzo.stroke(); 
        lienzo.closePath();//cierra el camino de la linea
    }

function dibujarTeclado(evento) //Se genera el primer evento 
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            console.log("arriba");
            break;

        case teclas.DOWN:
            console.log("abajo");
            break;

        case teclas.LEFT:
            console.log("izquierda");
            break;
            
        case teclas.RIGHT:
            console.log("derecha");
            break;
        
        default:
            console.log("otra tecla");
            break;
    }
}