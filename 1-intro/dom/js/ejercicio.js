var EJERCICIO = (function() {

	var spans;

	function getSpans() { // Singleton para 'spans' 
		if(!spans)
			spans = document.querySelectorAll('[class\^="verso-"]');

		return spans;
	}

	function ordenar() {
		// Ordena los diferentes span dentro del parrafo según la clase a la que pertenecen
		spans = getSpans();

		var spansArr = Array.prototype.slice.call(spans);

		spansArr.sort(function(a, b) {
			var aIndex = a.classList[0].split("-")[1];
			var bIndex = b.classList[0].split("-")[1];

			return parseInt(bIndex) - parseInt(aIndex);
		})

		var contenedor = document.querySelectorAll('p')[0];

		for (var i = 0; i<spansArr.length; i++)
			contenedor.insertBefore(spansArr[i],contenedor.childNodes[0]); // inserto el elemento del array ordenado antes del primer elemento (lo muevo a la primera posición)
	}

	function addSaltos() {
		// Edita el estilo de los span o añade una clase para que se realice un salto de linea entre cada verso
		spans = getSpans();
		for(var i = 0; i < spans.length; i++)
			spans[i].classList.add("linea");
	}

	function addVerso(verso) {
		// Añade el verso final de la poesía de Almafuerte
		var contenedor = document.querySelectorAll('p')[0];
		var v = contenedor.appendChild(document.createElement("span"));
		v.textContent = verso;

		spans = getSpans();
		var incremento = 1;
		v.className = "verso-"+(spans.length+incremento);
		spans = null; //invalidamos el singleton
	}

	return function() {
		addVerso('ya rodando en el polvo, tu cabeza!');
		addSaltos();
		ordenar();
	};

})();