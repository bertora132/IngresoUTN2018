function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var promedio;

	do
	{
		numero =parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador = contador + 1;

		respuesta = prompt("desea seguir? si/no: ");

	}while( respuesta == "si");

	promedio = acumulador/contador;

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value= promedio;

}//FIN DE LA FUNCIÓN