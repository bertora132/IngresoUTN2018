function Mostrar()
{ //al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

    var num;
    var esPrimo = true;
    num = parseInt(prompt("Ingrese un numero"));

    for(var i = 2 ; i < num ; i++)
    {
        if ( num % i == 0 )
        {
            esPrimo=false;
        }
        if (esPrimo)
        {
            alert(num + " es primo");
            
        }
        else
        {
            alert(num + " no es primo");
        }
    
    
    }
    

}//FIN DE LA FUNCIÓN