class Pakiman //Se genera la clase pakiman
{ 
    constructor(n,v,a) //Constrcutor de la clase Pakiman
        {
            this.nombre = n;
            this.vida = v;
            this.ataque = a;
            this.tipo = "tierra";
        }
        hablar()
        {
            alert(this.nombre);
        }    
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);
