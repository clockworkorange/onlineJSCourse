function esPalindromo (cadena)
{
	var cadenaOriginal = removeWhiteSpaces(toLowerCase(cadena));
	var cadenaReves = removeWhiteSpaces(reverseString(toLowerCase(cadenaOriginal)));
	return	cadenaOriginal == cadenaReves ? true : false	
}

function removeWhiteSpaces(cadena) 
{
	return cadena.replace(/ /g,'');
}

function reverseString(cadena)
{
	return cadena.split("").reverse().join("");
}

function toLowerCase(cadena)
{
	return cadena.toLowerCase();
}


var cadena = prompt("Introduzca un frase: ");
esPalindromo(cadena) ? alert("Es palindromo") : alert("No es palíndromo")
