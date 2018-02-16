function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var nota;

nota = Math.floor (Math.random() * 10 ) + 1;

if( nota <4 )
{
	alert( nota + " Vamos, la próxima se puede");
}

else if (nota <= 8)
{
	alert( nota + " APROBÓ");
}

else
{
	alert( nota + " Exelente");
}
}//FIN DE LA FUNCIÓN