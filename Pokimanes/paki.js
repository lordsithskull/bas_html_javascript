var imagenes =[]; //Se genera array asociativo, el cual tambíen será un objeto literal, este es nuestro diccionario
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30) );
coleccion.push(new Pakiman("Pokacho", 80, 50) );
coleccion.push(new Pakiman("Tocinauro", 120, 40) );

//Ciclo especial para recorrer los elementos en la coleccion
//Se puede utilizar for con "in"(índice) o con "of"(objetos)
for(var pakis of coleccion)
{
    pakis.mostrar();   
}