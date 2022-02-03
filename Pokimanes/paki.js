var imagenes =[]; //Se genera array asociativo, el cual tambíen será un objeto literal, este es nuestro diccionario
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30) );
coleccion.push(new Pakiman("Pokacho", 80, 50) );
coleccion.push(new Pakiman("Tocinauro", 120, 40) );
console.log(coleccion);