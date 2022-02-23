caja.push(new Billete(50, 50) );
caja.push(new Billete(20, 2) );
caja.push(new Billete(10, 1) );


var dinero, totalCaja = 0;
var division = 0, papeles = 0 ;

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");

function entregarDinero()
{
    var tx = document.getElementById("dinero");
    dinero = parseInt(tx.value);
        for(bi of caja)
    {
        if (dinero > 0)
        {
            division = Math.floor(dinero / bi.valor);
            if (division > bi.cantidad)
                {
                    papeles = bi.cantidad;
                }
            else
            {
                papeles = division;
            }
            entregado.push(new Billete(bi.valor,papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }
    
    if (dinero > 0)
        {
            resultado.innerHTML = "No puedo entregar esa cantidad <br>";
        }
    else
    {
        for (var e of entregado)
        if (e.cantidad != 0)
        {
           resultado.innerHTML = resultado.innerHTML + e.cantidad +" billetes de $" + e.valor + "<br>"; 
        }
    }
}

