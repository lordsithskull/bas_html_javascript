var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
//console.log(lienzo); //comando usado para probar lienzo
//dentro de la funcion colocamos el código para generar una  línea
dibujarLinea("pink",10,300,220,10);
dibujarLinea("yellow",300,10,10,220);
function dibujarLinea(color,xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial); //punto de origen
    lienzo.lineTo(xfinal,yfinal); //punto final
    lienzo.stroke(); 
    lienzo.closePath();//cierra el camino de la linea
}