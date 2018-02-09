/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var num1;
	var num2;
	var resultado;

	num1 = parseInt(document.getElementById("importe").value);

	num2 = num1 * 0.25;

	resultado = num1 - num2

	document.getElementById("resultado").value = resultado;
	
	
}
