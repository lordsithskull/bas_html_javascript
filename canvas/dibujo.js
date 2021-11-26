var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
//console.log(lienzo); comando usado para probar lienzo
lienzo.beginPath();
lienzo.stokeStyle = "red";
lienzo.moveTo(100,100); //punto de origen
lienzo.lineTo(200,200); //punto final
lienzo.stroke(); 
lienzo.closePath();//cierra el camino de la linea