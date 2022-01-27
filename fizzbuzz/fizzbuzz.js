var numeros = 100;
var divisible = false;

for (var i = 1 ; i <= numeros; i++)
{
    document.write(i);
    divisible = false;
    if(i % 3 == 0)
    {
        document.write(" Fizz");        
        divisible = true;
    }
    if(i % 5 == 0)
    {
        document.write(" Buzz");
        divisible = true;        
    }
        document.write("<br>");
}