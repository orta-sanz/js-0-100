JavaScript de 0 a 100
=====================

Introducción
------------

### Métodos básicos de interacción con el DOM

El ejercicio consiste en completar, ordenar y añadir una linea al poema haciendo uso de las clases que describen sus versos, las sentencias y operadores básicos de JavaScript y algúnos métodos para interactuar con el DOM.

### ¿Cómo?

Para resolver el ejercicio completa las funciones ordenar, addSaltos y addVerso del fichero js/ejercicio.js. Para ejecutar el ejercicio introduce en consola la llamada a la función: EJERCICIO()

### ¿Dónde?

Como explicamos en la raiz de este repositorio puedes hacerlo de muchas maneras: con git, descargando un .zip, directamente editando online...

**Online: [jsbin/EnUHOZEf](http://jsbin.com/EnUHOZEf/1/edit?html,js,output "1-intro/dom - jsbin")**

### Te puede venir bien

* document.querySelectorAll('...')
* document.createElement('span')
* elemento.appendChild(nodo)
* elemento.classList[0]
* elemento.classList.add('...')
* elemento.classList.length
* elemento.innerHTML = ...
* elemento.value = ... 
* parseInt('...')
* str.split('...')

### WTF?

La estructura inicial de js/ejercicio.js responde a un patrón para evitar la contaminación del ambito global, de manera que solo sea visible la función EJERCICIO, la cual al ser ejecutada se encarga de llamar a las otras tres.
Esta y otras prácticas se discutirán en la próxima edición del taller.