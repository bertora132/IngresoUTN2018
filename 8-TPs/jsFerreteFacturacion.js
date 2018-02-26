/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var numUno;
var numDos;
var numTres;
var suma;
var promedio;
var iva = 0.21;

function Sumar () 
{
    numUno = parseInt(document.getElementById("PrecioUno").value);

    numDos = parseInt(document.getElementById("PrecioDos").value);
   
    numTres = parseInt(document.getElementById("PrecioTres").value);

   

    suma = numUno + numDos + numTres;

	alert(" El resultado de la suma de precios es $ " + suma); 
}
function Promedio () 
{
    numUno = parseInt(document.getElementById("PrecioUno").value);

    numDos = parseInt(document.getElementById("PrecioDos").value);
   
    numTres = parseInt(document.getElementById("PrecioTres").value);

   

    suma = numUno + numDos + numTres;
    
    promedio = suma / 3;

	alert(" El resultado del promedio de los precios es $ " + promedio); 
}
	

function PrecioFinal () 
{
    numUno = parseInt(document.getElementById("PrecioUno").value);

    numDos = parseInt(document.getElementById("PrecioDos").value);
   
    numTres = parseInt(document.getElementById("PrecioTres").value);

    numUno = numUno + numUno * iva;

    numDos = numDos + numDos * iva;

    numTres = numTres + numTres * iva;

    suma = numUno + numDos + numTres;


	alert(" El resultado del precio final es $ " + suma); 
}
