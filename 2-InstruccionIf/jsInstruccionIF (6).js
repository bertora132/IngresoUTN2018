function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if( edad <13)

{
    alert(" es niño");
}
else if( edad <18)
{
    alert("es adolescente");
}
else
{
    alert("es adulto");
}
}//FIN DE LA FUNCIÓN