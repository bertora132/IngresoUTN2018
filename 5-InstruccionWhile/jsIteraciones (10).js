
/*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/


function Mostrar()
{
	//declarar contadores y variables 
	var numero;
	var acumpositivos=0;  
	var acumnegativos=0;
	var cantpositivos=0;
	var cantnegativos=0;
	var contceros=0;
	var contpares=0;
	var prompositivos;
	var promnegativos;
	var diferencia;
	var seguir;



	do
	{
	numero = parseInt(prompt("Ingrese un numero"));
	if ( numero > 0)
	{
		acumpositivos = acumpositivos + numero;
		cantpositivos ++;	
	}

	else if ( numero < 0 )
	{
		acumnegativos = acumnegativos + numero;
		cantnegativos ++;
	}

	else
	{
	 contceros++;
	}
	if (  numero % 2 == 0 )
	{
	contpares++; 
	}


	seguir = prompt("Desea seguir s/n" );	
	
	}while(seguir == "s")


	if ( cantpositivos != 0)
	{
		prompositivos = acumpositivos / cantpositivos;
	}
	if ( cantnegativos != 0)
	{
		promnegativos = acumnegativos / cantnegativos;
	}

	diferencia = acumpositivos - acumnegativos;

document.write("1-Suma de los negativos: " + acumnegativos + "<br/>");
document.write("2-Suma de los positivos " + acumpositivos + "<br/>");
document.write("3-Cantidad de positivos " + cantpositivos + "<br/>");
document.write("4-Cantidad de negativos " + cantnegativos + "<br/>");
document.write("5-Cantidad de ceros " + contceros + "<br/>");
document.write("6-Cantidad de números pares " + contpares + "<br/>");
document.write("7-Promedio de positivos " + prompositivos + "<br/>");
document.write("8-Promedios de negativos " + promnegativos + "<br/>");
document.write("9-Diferencia entre positivos y negativos " + diferencia); 

}//FIN DE LA FUNCIÓN