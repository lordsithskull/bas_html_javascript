var vp = document.getElementById("villaPlatzi"); //preparacion del canvas
var papel = vp.getContext("2d"); //contexto del canvas

var fondo = {
    url:"tile.png", //ruta del "mapa"
    cargaOK = false
};

var vaca = {
    url:"vaca.png",
    cargaOK = false
};

fondo = new Image();// Se genera un nuevo objeto Imagen, el cual es el fondo
fondo.imagen.src = fondo.url; //Ruta del mapa
fondo.imagen.addEventListener("load",cargarFondo);//Listener para la carga del objeto

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

function cargarFondo()
{
    fondo.cargaOK = true;
}

function dibujar()
{
    papel.drawImage(fondo,0,0);//Se dibuja la imagen en la posicion  (x,y)
}


function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.ceil (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}