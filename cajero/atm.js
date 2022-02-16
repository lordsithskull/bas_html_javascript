caja.push(new Billete(50, 5) );
caja.push(new Billete(20, 20) );
caja.push(new Billete(10, 2) );


var dinero = 150, totalCaja = 0;
var division = 0, papeles = 0 ;

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

function entregarDinero()
{
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
    console.log(entregado);
}


    


