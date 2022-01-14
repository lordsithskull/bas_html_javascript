document.addEventListener("mousedown",posiscionInicial);//Listener para presionar el boton del mouse
document.addEventListener("mouseup",posiscionFinal); //Listener para soltar el mouse
document.addEventListener("mousemove",dibujarLinea);//Listener para dibujar con el mouse

var cuadrito = document.getElementById("area_de_dibujo");
var lienzo = cuadrito.getContext("2d");

let dibujar = false; //Bandera para determinar si se debe o no dibujar

//funcion para determinar posicion inicial para dibujar
function posiscionInicial(){
    dibujar = true;
    console.log(dibujar);
}

//funcion para determinar posicion final de dibujar
function posiscionFinal(){
    dibujar = false;
    console.log(dibujar);
    lienzo.beginPath();// se usa para generar un nuevo trazo y no continuar el dibujo del trazo previo
}

function dibujarLinea(evento)
    {
       if (!dibujar) return;   
        lienzo.strokeStyle = "black";
        lienzo.lineWidth = 15; //ancho de la linea en px
        lienzo.lineTo(evento.clientX,evento.clientY); //(evento.clientX,evento.clientY) permiten determinar la posición del mouse
        lienzo.stroke(); 
        lienzo.beginPath();
        lienzo.moveTo(evento.clientX,evento.clientY);
        console.log(dibujarLinea);
    }

