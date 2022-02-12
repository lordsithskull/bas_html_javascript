var caja = [], entregado = [];
caja.push(new Billete(50, 1) );
caja.push(new Billete(20, 20) );
caja.push(new Billete(10, 2) );


var dinero = 160, totalCaja = 0;
var division = 0, papeles = 0 ;


for(b of caja)
{
    if (dinero > 0)
    {
        division = Math.floor(dinero / b.valor);
        if (division > b.cantidad)
            {
                papeles = b.cantidad;
            }
        else
        {
            papeles = division;
        }
        entregado.push(new Billete(b.valor,papeles) );
        dinero = dinero - (b.valor * papeles);
    }
}
    
for(entrega of entregado)
    {
        entrega.mostrar();
        console.log(entrega);
    }

