var z;


for (i = 0; i < 10; i++)
{
    z = aleatorio(-2,4);
    document.write(z +", ");
}


function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.ceil (Math.random() * (maxi - min + 1)) + min; //Math.floor redondeo hacia abajo, Maht.
    return resultado;
}