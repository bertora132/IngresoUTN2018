/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno 
    rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
    se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos 
    mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var rectangulo;
var largo;
var ancho;
var circulo;
var radio;
var cal;
var cemento;
function Rectangulo () 
{
    largo = parseInt(document.getElementById("Largo").value);   
    ancho = parseInt(document.getElementById("Ancho").value); 

    rectangulo = (largo + ancho) * 2  ;

    rectangulo = rectangulo * 3;
    
 alert(" Se nececitan " + rectangulo + " metro de lambre");
    
}
function Circulo () 
{
    radio = parseInt(document.getElementById("Radio").value);   

    circulo = radio * radio / 2;
    
    alert(" Se nececitan " + circulo + " metro de lambre");
}
function Materiales () 
{
    largo = parseInt(document.getElementById("Largo").value);   
    ancho = parseInt(document.getElementById("Ancho").value); 

    //1x1 = 3 y 2

	
}