//Se genera codigo para agregar eventos 
var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
//Se agrega un listener
 boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujoPorClick()
{
    console.log(texto);
    var lineas = parseInt(texto.value);     
    var l, xi, yi , xf,yf ;
    var espacio = ancho / lineas; 

    for (l = 0 ; l < lineas; l++) //forma inferior izquierda 
{
    dibujarLinea("#AAF",0,yi,xf,300);
    //console.log("linea " +l);
    yi = l * espacio;
    xf = ( l + 1) * espacio ;
}

for (l = 0; l < lineas; l++) //forma inferior derecha
{
    dibujarLinea("#FFC300",xi,300,300,yf);
    console.log("linea " +l);
    xi = l * espacio;
    yf = 300 - (( l + 1 ) * espacio);
}

for (l = 0; l < lineas; l++) //forma superior izquierda 
{
    dibujarLinea("#ab0f2c",0,yi,xf,0);
   // console.log("linea "+ l);
    yi = 300 - (l * espacio);
    xf = (l + 1 ) * espacio;
}

for (l = 0; l < lineas; l++) //forma superior derecha
{
    dibujarLinea("#15861d",300,yi,xf,0);
  //  console.log("linea " +l);
    yi = l * espacio;
    xf = ( l + 1) * espacio ;
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
}

