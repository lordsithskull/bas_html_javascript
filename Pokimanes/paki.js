var imagenes =[]; //Se genera array asociativo, el cual tambíen será un objeto literal, este es nuestro diccionario
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman //Se genera la clase pakiman
{ 
    constructor(n,v,a) //Constrcutor de la clase Pakiman
        {
            this.imagen = new Image();
            this.nombre = n;
            this.vida = v;
            this.ataque = a;
            
            this.imagen.src = imagenes[this.nombre];
        }
        hablar()
        {
            alert(this.nombre);
        }
        
        mostrar()
        {
            document.body.appendChild(this.imagen);
        }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);

tocinauro.mostrar();
pokacho.mostrar();
cauchin.mostrar();