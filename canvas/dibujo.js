var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
//console.log(lienzo); //comando usado para probar lienzo
//dentro de la funcion colocamos el código para generar una  línea
var lineas = 30; 
var l, xi, yi , xf,yf ; 

for (l = 0 ; l < lineas; l++) //forma inferior izquierda 
{
    dibujarLinea("#AAF",0,yi,xf,300);
    console.log("linea " +l);
    yi = l * 10;
    xf = ( l + 1) * 10 ;
}

for (l = 0; l < lineas; l++) //forma inferior derecha
{
    dibujarLinea("#15861d",xi,300,300,yf);
    console.log("linea " +l);
    xi = l * 10;
    yf = 300 - ((l+1)*10);
}

for (l = 0; l < lineas; l++) //forma superior derecha
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