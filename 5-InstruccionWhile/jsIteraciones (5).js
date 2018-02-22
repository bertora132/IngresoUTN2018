function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(!( sexo == "f" || sexo == "m"  ))
{
	sexo = prompt("El caracter ingresado no es correcto");
	
}
alert("Usted es de sexo: " + sexo);


document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN