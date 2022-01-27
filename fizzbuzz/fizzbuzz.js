var numeros = 100;
for (var i = 1 ; i <= numeros; i++)
{
    if((i % 3 == 0) && (i % 5 == 0))
    {
        document.write(i +" Fizz Buzz<br>");
    }
    else if(i % 3 == 0)
    {
        document.write(i +" Fizz <br>");        
    }
    else if(i % 5 == 0)
    {
        document.write(i +" Buzz <br>");
        
    }
    else
    {
        document.write(i + "<br>");
    }
}