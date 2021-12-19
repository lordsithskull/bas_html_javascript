var teclas = { //SE GENERA UN OBJETO USANDO NOTACION DE JSON
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
};

document.addEventListener("keyup", dibujarTeclado); //se agregag un listener para detectar teclas presionadas
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150, y = 150;
dibujarLinea("red",149,149,151,151,papel); //Linea de prueba para verificar que canvas funciona

function dibujarLinea(color,xinicial, yinicial,xfinal,yfinal, lienzo)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial,yinicial); //punto de origen
        lienzo.lineWidth = 3; //ancho de la linea en px
        lienzo.lineTo(xfinal,yfinal); //punto final
        lienzo.stroke(); 
        lienzo.closePath();//cierra el camino de la linea
    }

function dibujarTeclado(evento) //Se genera el primer evento 
{
    var colorcito = "blue";
    var movimiento = 10;
    switch(evento.keyCode)
    {        
        case teclas.UP:
            console.log("arriba");
            dibujarLinea(colorcito , x, y, x, y - movimiento);
            y = y - movimiento;
            break;

        case teclas.DOWN:
            dibujarLinea(colorcito , x, y, x, y + movimiento);
            y = y + movimiento;
            console.log("abajo");
            break;

        case teclas.LEFT:
            console.log("izquierda");
            dibujarLinea(colorcito , x, y, x - movimiento, y );
            x = x - movimiento;
            break;
            
        case teclas.RIGHT:
            console.log("derecha");
            dibujarLinea(colorcito , x, y, x + movimiento, y );
            x = x + movimiento;
            break;
        
        default:
            console.log("otra tecla");
            break;
    }
}