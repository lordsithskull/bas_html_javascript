var z = aleatorio(10,20);
document.write(z);

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}