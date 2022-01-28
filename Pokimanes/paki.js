class Pakiman //Se genera la clase pakiman
{ 
    constructor(nombre) //Constrcutor de la clase Pakiman
        {
            this.nombre = nombre;
            this.tipo = "tierra";
        }    
}

var cauchin = new Pakiman("Cauchin");
console.log(cauchin);