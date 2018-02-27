/*al presionar el botón pedir un número.
Mostar los numeros pares desde el 1 al 
número ingresado, y mostar la cantidad de 
numeros pares encontrados*/
function Mostrar()
{
var num;
var contpares = 0;

num = parseInt(prompt("Ingrese un numero"));

for( var i = 1; i <= num ; i++ )

{   
    if ( i % 2 == 0)
    {
    console.log( i );
    contpares ++;
    }    
}
 
console.log("la cantidad encontrada de pares es: " + contpares );


}//FIN DE LA FUNCIÓN