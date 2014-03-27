function EJERCICIO() {
	var funciones = [];
	var salida = document.getElementById('salida');

	while (funciones.length <= 10) {
		funciones.push(function (numero){
			salida.innerHTML += numero + ' ';
		});
	}

	for(var i = 1; i < funciones.length; i++){
		funciones[i](i);
	}
}