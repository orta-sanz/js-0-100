function EJERCICIO() {
	var funciones = [];
	var salida = document.getElementById('salida');

	while (funciones.length <= 10) {
		funciones.push(function (numero){
			salida.innerHTML += numero + ' ';
		});
	}

	salida.innerText = '';
	for(var f in funciones)
		funciones[f]();
}