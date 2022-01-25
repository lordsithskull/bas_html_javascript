var vp = document.getElementById("villaPlatzi"); //preparacion del canvas
var papel = vp.getContext("2d"); //contexto del canvas
x = 0;
y = 0;
document.addEventListener("keydown", dibujarTeclado);

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

var teclas = { //SE GENERA UN OBJETO USANDO NOTACION DE JSON
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
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
    var x,y;
    if (vaca.cargaOK)
        {           
            for(var v =0; v < cantidad; v++)
            {
                x = aleatorio(0,420);
                y = aleatorio(0,420);
                papel.drawImage(vaca.imagen,x,y);
            }
        }
    
    cantidad = aleatorio(0,5);
    if(pollo.cargaOK)
    {
        for(var p =0; p < cantidad; p++)
        {
            x = aleatorio(0,420);
            y = aleatorio(0,420);
            papel.drawImage(pollo.imagen,x,y);
        }
    }
    
    dibujarCerdo();
        
}


function aleatorio(min, maxi)
{
    var resultado; 
    resultado = Math.ceil (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}

function dibujarCerdo()
{
    if(cerdo.cargaOK)
        papel.drawImage(cerdo.imagen,x,y);
}

function dibujarTeclado(evento) //Se genera el primer evento 
{
    var colorcito = "blue";
    var movimiento = 10;
    switch(evento.keyCode)
    {        
        case teclas.UP:
            console.log("arriba");            
            dibujar();           
            dibujarCerdo();
            if(y!=0)
            {
                y = y - 10;    
            }
            else
                y = y;       
            break;

        case teclas.DOWN:
            console.log("abajo");
            dibujar();           
            dibujarCerdo();
            if(y!= 420)
            {
                y = y + 10;    
            }
            else
                y = y;     
            break;

        case teclas.LEFT:
            console.log("izquierda");
            dibujar();           
            dibujarCerdo();
            if(x!=0)
            {
                x = x - 10;    
            }
            else
                x = x;       
            break;
            
        case teclas.RIGHT:
            console.log("derecha");
            dibujar();           
            dibujarCerdo();
            if(x!=420)
            {
                x = x + 10;    
            }
            else
                x = x;       
            break;
        
        default:
            console.log("otra tecla");
            break;
    }
}