var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI=parseInt(prompt("Introduzca el número del DNI"));
if(numeroDNI < 0 || numeroDNI > 99999999)
{
	alert("El número proporcionado no es válido, debe ser mayor que 0 y menor que 99999999");
}
else 
{
	var letraDNI=prompt("Introduzca la letra del DNI");
	var resto = numeroDNI % 23;
	letras[resto] == letraDNI ?
				alert("el número y la letra del DNI son correctos") :
				alert("el número y la letra del DNI son incorrectos");
}
