var EJERCICIO = (function() {

	var spans = null; // evito llamar querySelectorAll en cada una de las funciones

	function getSpans() // Singleton para 'spans'
	{
		if(spans == null)
			spans = document.querySelectorAll('[class\^="verso-"]');

		return spans;
	}

	function ordenar() {
		// Ordena los diferentes span dentro del parrafo según la clase a la que pertenecen
		spans = getSpans();

		var spansArr = toArray(spans);

		spansArr.sort(function(a, b)
		{
			var aIndex = a.classList[0].substr(a.classList[0].lastIndexOf("-")+1);
			var bIndex = b.classList[0].substr(b.classList[0].lastIndexOf("-")+1);

			return parseInt(bIndex) - parseInt(aIndex);
		});

		var cont = document.querySelectorAll('p')[0];

		for (var i = 0; i<spansArr.length; i++) {
			cont.insertBefore(spansArr[i],cont.childNodes[0]); // inserto el elemento del array ordenado antes del primer elemento (lo muevo a la primera posición)
		};
	}

	function addSaltos() {
		// Edita el estilo de los span o añade una clase para que se realice un salto de linea entre cada verso
		spans = getSpans();
		for(var i = 0; i < spans.length; i++)
		{
			spans[i].classList.add("linea");
		}
	}

	function addVerso(verso) {
		// Añade el verso final de la poesía de Almafuerte
		var cont = document.querySelectorAll('p')[0];
		var v = cont.appendChild(document.createElement("span"));
		v.textContent = verso;

		spans = getSpans();
		v.className = "verso-"+(spans.length+1);
		spans = null; //invalidamos el singleton
	}

	return function() {
		addVerso('ya rodando en el polvo, tu cabeza!');
		addSaltos();
		ordenar();
	};

	/*  http://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript 
		Convertir una DOM collection en un array convencional, para poder usar sort() y ordenar de forma fácil.
	*/
	function toArray(obj) {
	  var array = [];
	  // iterate backwards ensuring that length is an UInt32
	  for (var i = obj.length >>> 0; i--;) { 
	    array.push(obj[i]);
	  }
	  return array;
	}
})();