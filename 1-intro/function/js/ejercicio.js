var EJERCICIO = (function() {
	var canvas  = document.getElementById('lienzo');
	var height  = canvas.offsetHeight;
	var width   = canvas.offsetWidth;
	var context = canvas.getContext('2d');

	function aleatorio(maximo) {
		return Math.round(Math.random() * (maximo));
	}

	function tapaDeAPoco() {
		context.beginPath();
		context.rect(0, 0, width, height);
		context.fillStyle = 'rgba(255, 255, 255, .1)';
		context.fill();
	}

	function dibujaCirculo(x, y, radio, color) {
		var radio = radio || 15;
		var color = color || { r: 100, g: 20, b: 210 };

		context.beginPath();
		context.arc(x, y, radio, 0, 2*Math.PI, false);
		context.fillStyle = 'rgb('+color.r+','+color.g+','+color.b+')';
		context.fill();
	}

	setInterval(tapaDeAPoco, 250);

	return function() {
		 if (arguments.length == 0) {
		 	for (var i = 0; i <= aleatorio(100); i++) {
		 		var x = aleatorio(400);
		 		var y = aleatorio(200);
		 		var radio = aleatorio(30);

		 		var color = {r: aleatorio(250), g: aleatorio(250), b: aleatorio(250)};

		 		dibujaCirculo(x,y,radio,color);
		 	}
		 }
		 else {
		 	for (var i = 0; i < arguments.length; i++) {
		 		dibujaCirculo.apply(this, arguments[i]);
		 	}
		 }
	};
})();

EJERCICIO([100, 20, 5], [30, 50], [80, 120]);
EJERCICIO([150, 80], [60, 150, 30]);