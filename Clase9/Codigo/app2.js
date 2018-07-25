var mensaje = "mensaje local";
var resultado = 2;

var datos = {};
datos.mensaje = "mensaje local del objeto";
datos.resultado = 120;

function Saludar() {
	console.log(mensaje);
	console.log(resultado);

	console.log(datos);
	console.log(datos.resultado);
}

Saludar()