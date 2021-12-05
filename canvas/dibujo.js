var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
//console.log(lienzo); //comando usado para probar lienzo
//dentro de la funcion colocamos el código para generar una  línea
var lineas = 30; 
var l = 0, yi , xf; 

for (l; l < lineas; l++)
{
    dibujarLinea("#AAF",0,yi,xf,300);
    console.log("linea " +l);
    yi = l * 10;
    xf = ( l + 1) * 10 ;
}
l=0;
for (l; l < lineas; l++)
{
    dibujarLinea("#15861d",300,yi,xf,0);
    console.log("linea " +l);
    yi = l * 10;
    xf = ( l + 1) * 10 ;
}
dibujarLinea("black",1,1,1,299)
dibujarLinea("black",1,1,299,1)
dibujarLinea("black",1,299,299,299)
dibujarLinea("black",299,299,299,1)


function dibujarLinea(color,xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial); //punto de origen
    lienzo.lineTo(xfinal,yfinal); //punto final
    lienzo.stroke(); 
    lienzo.closePath();//cierra el camino de la linea
}