var caja = [], entregado = [];
class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
    }

    mostrar ()
    {
        document.write("Denominaci&oacute;n " + this.valor + "  ");        
        document.write("Cantidad " + this.cantidad + " <br/>");        
    }
}

