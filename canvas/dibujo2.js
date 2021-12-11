//Se genera codigo para agregar eventos 
var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
//Se agrega un listener
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30; 
var l, xi, yi , xf,yf ; 

for (l = 0 ; l < lineas; l++) //forma inferior izquierda 
{
    dibujarLinea("#AAF",0,yi,xf,300);
    //console.log("linea " +l);
    yi = l * 10;
    xf = ( l + 1) * 10 ;
}

dibujarLinea("black",1,1,1,299)
dibujarLinea("black",1,1,299,1)
dibujarLinea("black",1,299,299,299)
dibujarLinea("black",299,299,299,1)

function dibujoPorClick()
{
    alert("Click de prueba");
}

function dibujarLinea(color,xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial); //punto de origen
    lienzo.lineTo(xfinal,yfinal); //punto final
    lienzo.stroke(); 
    lienzo.closePath();//cierra el camino de la linea
}