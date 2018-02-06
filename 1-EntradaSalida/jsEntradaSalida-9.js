/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var num1;
	var num2;
	var resultado;
	
	num1 = parseInt(document.getElementById("sueldo").value);

	num2 = 10;

	num2 = parseInt(document.getElementById("resultado").value);
	
	resultado = num1 + (10 % num2);

	
	resultado = parseInt(document.getElementById("resultado").value) = resultado;
	
	
	
		
	
	
}
