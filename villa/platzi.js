var vp = document.getElementById("villaPlatzi"); //preparacion del canvas
var papel = vp.getContext("2d"); //contexto del canvas

var fondo = {
    url:"tile.png",
    cargaOK: false
};
var vaca = {
    url:"vaca.png",
    cargaOK: false
};
var pollo = {
    url:"pollo.png",
    cargaOK: false
};
var cerdo ={
    url:"cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();// Se genera un nuevo objeto Imagen, el cual es el fondo
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);//Listener para la carga del objeto

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load",cargarCerdo);

var cantidad = aleatorio(0,10);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca()
{ 
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargaOK)// con valores bool se puede quitar la condición
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOK)
        {
            
            for(var v =0; v < cantidad; v++)
            {
                var x = aleatorio(0,420);
                var y = aleatorio(0,420);
                papel.drawImage(vaca.imagen,x,y);
            }
        }
    if(pollo.cargaOK)
    {
        papel.drawImage(pollo.imagen,250,250);
    }
        
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen,100,200);
    }
}


function aleatorio(min, maxi)
{
    var resultado; 
    resultado = Math.ceil (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}