var numero = prompt("Introduzca número para calcular el factorial");
var resultado = numero
for(i = 1; i < numero; i++)
{
	resultado = resultado * (numero - i);
}
alert("El valor de " + numero + "! es: " + resultado);
