String.prototype.espaciar = function () { return ((this.split('')).toString()).replace(/,/g,' ') };

console.log('Esto es una prueba'.espaciar());

console.log(String('Y esto es otra prueba').espaciar());