JavaScript de 0 a 100
=====================

Introducción
------------

### Funciones, parámetros y más

El ejercicio consiste en implementar una función "sobrecargada" que haga uso de otros métodos dentro del objeto. Al mismo tiempo introducimos unos cuantos elementos nuevos, como los array, la librería Math y el canvas.

### ¿Cómo?

Para resolver el ejercicio completa la función EJERCICIO, de modo que cada vez que se llame a la misma ocurra una de las siguientes cosas:

* Si se pasa una lista de *n* parámetros, se pintarán *n* circulos en las posiciones indicadas. Opcionalmente se puede indicar el radio de dichos círculos (de no indicarse, el radio por defecto es 15).
* Si no se pasa ningún parámetro se pintará un número aleatorio de círculos con radios aleatorios y posiciones aleatorias dentro del canvas.

En cualquiera de los dos casos los círculos tendrán que ser de un color aleatorio.
Finalmente usaremos la función tapaDeAPoco para ir borrando el lienzo progresivamente.

**Los parámetros (opcionales) pasados a la función EJERCICIO son arrays del tipo [posicionX, posicionY, radio], siendo el radio optativo.**

### ¿Dónde?

Como explicamos en la raíz de este repositorio puedes hacerlo de muchas maneras: con git, descargando un .zip, directamente editando online...

**Online: [jsbin/selas](http://jsbin.com/selas/1/edit?html,js,output "1-intro/dom - jsbin")**

### Te puede venir bien

* Objeto Array
* Objeto Math (Math.random)
* setInterval / setTimeout
* [Canvas](http://www.html5canvastutorials.com "Tutoriales varios de canvas")

### WTF?

La estructura inicial de js/ejercicio.js responde a un patrón para evitar la contaminación del ámbito global, de manera que solo sea visible la función EJERCICIO.
Esta y otras prácticas se discutirán en la próxima edición del taller.