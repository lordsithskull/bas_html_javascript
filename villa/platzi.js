var vp = document.getElementById("villaPlatzi"); //preparacion del canvas
var papel = vp.getContext("2d"); //contexto del canvas
var mapa = "tile.png"; //ruta del "mapa"

var vaca = {
    url:"vaca.png",
    cargaOK = false
};

var fondo = new Image();// Se genera un nuevo objeto Imagen, el cual es el fondo
fondo.src = mapa; //Ruta del mapa
fondo.addEventListener("load",cargarFondo);//Listener para la carga del objeto

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load",cargarVacas);

function dibujarFondo()
{
    papel.drawImage(fondo,0,0);//Se dibuja la imagen en la posicion  (x,y)
}


function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.ceil (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}