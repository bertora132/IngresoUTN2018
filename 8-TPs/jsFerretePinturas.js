/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperatura;
var centigrados;
var fahrenheit;
var contador;
function FahrenheitCentigrados () 
{
    temperatura = parseInt(document.getElementById("Temperatura").value);
    
    centigrados = (temperatura - 32) / 1.8;
    alert( temperatura+"° Fahrenheit son " + centigrados+"° centigrados");


}


function CentigradosFahrenheit () 
{
    temperatura = parseInt(document.getElementById("Temperatura").value);

    temperatura = temperatura * 1.8 +32;
    
    alert( temperatura+"° Centígrados son " + fahrenheit+"° Fahrenheit");
}
