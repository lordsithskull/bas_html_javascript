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
            document.write("<br><strong>" + this.nombre + "</strong><br/>");
            document.write("<strong> ATK " + this.ataque + "</strong><br/>");
            document.write("<strong> VID" + this.vida + "</strong><br><hr/>");
            
        }
}