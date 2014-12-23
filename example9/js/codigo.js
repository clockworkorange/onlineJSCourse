function mayusMinusAmbos(cadena)
{
	var resultado = "La cadena contiene "
	if(cadena == cadena.toLowerCase())
	{
		resultado = resultado + "solo minúsculas";
	}
	else if (cadena == cadena.toUpperCase())
	{
		resultado = resultado + "solo mayúsculas";
	}
	else
	{
		resultado = resultado + "mayúsculas y minúsculas";
	}
	return resultado;
}

var cadena = prompt("Introduzca un frase: ");
alert(mayusMinusAmbos(cadena));
