JavaScript de 0 a 100
=====================

Introducción
------------

### Ambito de variables y funciones anónimas

El objetivo de este ejercicio es plantear un problema muy típico cuando se trabaja con JavaScript. Es un problema de ambitos y punteros que, en un código que creemos claro y simple, termina devolvieno una salida inesperada.

El funcionamiento deseado es que las 10 funciones almacenadas en el array añadan a la salida un número, de modo que la salida final sea:

    1 2 3 4 5 6 7 8 9 10

### ¿Cómo?

Resuelve el conflicto modificano la función EJERCICIO, concretamente necesitas modificar el primer bucle de la misma... aunque se admiten otras soluciones ;]. Para ejecutar el ejercicio introduce en consola la llamada a la función: EJERCICIO()

### ¿Dónde?

Como explicamos en la raiz de este repositorio puedes hacerlo de muchas maneras: con git, descargando un .zip, directamente editando online...

**Online: [jsbin/EJAyArA](http://jsbin.com/EJAyArA/1/edit?html,js,output,console "1-intro/scope - jsbin")**

### Te puede venir bien

Al realizar una llamada a función, los parametros de tipo primitivo se copian... en comparación con otros lenguajes de programación diríamos que el paso de parametros primitivos es siempre **por valor y núnca por referencia**
