function Mostrar()
{
    var num;
    var contDivisores = 0;

    num = parseInt(prompt("Ingrese un numero"));

    for ( var i = 1 ; i < num ; i++  )
    {
        if( num % i != 0 )
        {
           continue;     
        }
         
        console.log(i);
        contDivisores ++;
    }

    console.log(" la cantidad de nunmeros divisores es: " + contDivisores );

}//FIN DE LA FUNCIÓN