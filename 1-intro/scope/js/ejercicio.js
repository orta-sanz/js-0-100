function EJERCICIO() {
	var funciones = [];
	var salida = document.getElementById('salida');

	// Las funciones almacenadas en este bucle no son las que deseamos
	for(var i=1; i<=10; i++)
		funciones.push((function(t) {
			return function() { salida.innerHTML = salida.innerHTML+t+'&nbsp;'; }
		})(i));

	salida.innerText = '';
	for(var f in funciones)
		funciones[f]();
}