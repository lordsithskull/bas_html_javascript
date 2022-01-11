document.addEventListener("mousedown",dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150, y = 150; //variables de arranque

dibujarLinea("red",149,149,151,151,papel); //Linea de prueba para verificar que canvas funciona

function dibujarLinea(color,xinicial, yinicial,xfinal,yfinal, lienzo)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial,yinicial); //punto de origen
        lienzo.lineWidth = 5; //ancho de la linea en px
        lienzo.lineTo(xfinal,yfinal); //punto final
        lienzo.stroke(); 
        lienzo.closePath();//cierra el camino de la linea
    }

function dibujarMouse(evento) //Se genera el primer evento 
{
   console.log("mousedown");
}