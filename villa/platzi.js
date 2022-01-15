var vp = document.getElementById("villaPlatzi"); //preparacion del canvas
var papel = vp.getContext("2d"); //contexto del canvas
var mapa = "tile.png"; //ruta del "mapa"

var imagen = new Image();// Se genera un nuevo objeto Imagen
imagen.src = mapa; //Ruta del mapa
imagen.addEventListener("load",dibujar);//Listener para la carga del objeto

function dibujar()
{
    papel.drawImage(imagen,0,0);//Se dibuja la imagen en la posicion  (x,y)
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.ceil (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}