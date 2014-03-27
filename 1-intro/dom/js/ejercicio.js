var EJERCICIO = (function() {
	function ordenar() {
		var verses = document.querySelectorAll('span');
		var orde_verses = [];
		var par = document.body.querySelector('p');

		while (par.firstChild) {
			par.removeChild(par.firstChild);
		}
		
		for (var i = 0; i <= verses.length; i++) {
			for (var f = 0; f < verses.length; f++) {
				if (((verses[f].classList[0]).split('-')[1]) == i) {
					orde_verses.push(verses[f]);
				}
			}
		}

		for (var i = 0; i < orde_verses.length; i++) {
			par.appendChild(orde_verses[i]);
		}
	}

	function addSaltos() {
		var verses = document.querySelectorAll('span');
		for (var i = 0; i < verses.length; i++) {
			verses[i].classList.add('linea');
		}
	}

	function addVerso(verso) {
		var par = document.body.querySelector('p');
		var span = document.createElement('span');
		span.classList.add('verso-14')
		span.appendChild(document.createTextNode(verso));
		par.appendChild(span);
	}

	return function() {
		addVerso('ya rodando en el polvo, tu cabeza!');
		addSaltos();
		ordenar();
	};
})();