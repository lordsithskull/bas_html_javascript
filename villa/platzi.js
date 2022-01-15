var vp = document.getElementById("villaPlatzi"); //preparacion del canvas
var papel = vp.getContext("2d"); //contexto del canvas
var mapa = "tile.png"; //ruta del "mapa"

var fondo = new Image();// Se genera un nuevo objeto Imagen, el cual es el fondo
fondo.src = mapa; //Ruta del mapa
fondo.addEventListener("load",dibujarFondo);//Listener para la carga del objeto

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load",dibujarVaca);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load",dibujarCerdo);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load",dibujarPollo);

function dibujarFondo()
{
    papel.drawImage(fondo,0,0);//Se dibuja la imagen en la posicion  (x,y)
}

function dibujarVaca()
{
    papel.drawImage(vaca,0,0);
}

function dibujarCerdo()
{
    papel.drawImage(cerdo,0,0);
}

function dibujarPollo()
{
    papel.drawImage(Pollo,0,0);
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.ceil (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}