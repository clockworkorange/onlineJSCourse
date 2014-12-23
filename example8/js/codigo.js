function esPar(numero)
{
	return numero % 2 == 0 ? true : false	
}

var numero = parseInt(prompt("Introduzca número"));
esPar(numero) ? alert("El número es par") : alert("El número no es par")
