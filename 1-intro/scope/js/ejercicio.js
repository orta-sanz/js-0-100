function EJERCICIO() {
	var funciones = [];
	var salida = document.getElementById('salida');

	var fun = function(iAhora) {
		return function() {
			salida.innerHTML = salida.innerHTML + iAhora + '&nbsp;';
		};
	};
		
	for(var i=1; i<=10; i++) {
		var funcionConVariableCorrecta = fun(i);
		funciones.push(funcionConVariableCorrecta);
	}

	salida.innerText = '';
	for(var f in funciones) {
		funciones[f]();
	}
}