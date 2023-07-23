const sayHi = () => {
    return (() => 'Hi Javascript!')();
  };
  
  console.log(typeof sayHi());

  /*Respuesta Correcta: C) string
La función sayHi regresa una otra función de tipo flecha, dicha función es anónima y solo devuelve la cadena Hi JavaScript, el detalle acá es que esta función anónima una vez regresada es inmediatamente llamada.

Entonces sayHi será igual a la cadena Hi Javascript y en conclusión su typeof igual a string.

Podriamos ver también este ejemplo si extraemos la función anónima y escribimos en una función auxiliar por aparte, de la siguente manera:

  const aux = () => {
 return "Hi Javascript!"
 }

const sayHi = () => {
 return aux();
 }

console.log(typeof sayHi()); // string  

*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const getName = (obj) => {
  obj.name ??= 'Sin Nombre';
  return obj;
};
console.log(getName({}));

/*Respuesta Correcta: C) { name:"Sin Nombre" }
El operador ??= se llama Logical Nullish Assignment es un operador de corto circuito moderno que consiste en ejecutar porciones de código si evaluamos una condición como nullish, osea, como valor null o undefined.

Entonces, en el ejemplo, si obj.name evalua como nullish, ejecutamos "Sin Nombre".

Llamamos a la función getName pasandole un objeto vacío, entonces todas sus propiedades son undefined y por consecuencia nullish, por ello a obj.name se el asigna el valor "Sin Nombre" y retornamos ese objeto. */

//-----------------------------------------------------------------------------------------------------------
const fruits = [
  { id: 1, name: 'Lime', quantity: 3 },
  { id: 2, name: 'Apple', quantity: 2 },
  { id: 3, name: 'Pineapple', quantity: 4 },
];

const count = fruits.some((fruit) => fruit.quantity > 5);

/*Respuesta Correcta: B) false
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. */

const persona = {
  id: 1,
  nombre: 'Fernando',
};
persona.nombre = 'Pedro';
console.log(persona.nombre);

/*Inicialmente el objeto persona tiene en la llave nombre la cadena Fernando pero luego hacemos persona.nombre = "Pedro" que actualiza el valor de nombre perdiendo la cadena Fernando. */

//-----------------------------------------------------------------------------------------------------------
/*Por ejemplo, dado A = 3 -> 7 -> 8 -> 10 y B = 99 -> 1 -> 8 -> 10, devuelve el nodo con valor 8.

En este ejemplo, suponga que los nodos con el mismo valor son exactamente los mismos objetos de nodo.

Haz esto en tiempo O(M + N) (donde M y N son las longitudes de las listas) y espacio constante. 



Para encontrar el nodo con el valor 8 en las dos listas en tiempo O(M + N) y espacio constante, podemos utilizar un enfoque con dos punteros. Aquí te presento la implementación en JavaScript:*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findIntersection(A, B) {
  let ptrA = A;
  let ptrB = B;

  // Recorremos ambas listas hasta que se crucen o lleguen al final
  while (ptrA !== ptrB) {
    // Avanzamos los punteros en ambas listas, si llegan al final, los reasignamos al inicio de la otra lista
    ptrA = ptrA === null ? B : ptrA.next;
    ptrB = ptrB === null ? A : ptrB.next;
  }

  // Si ptrA o ptrB es null en este punto, significa que no hay intersección
  // Si hay intersección, devolvemos cualquiera de los dos punteros (ambos apuntan al nodo de intersección)
  return ptrA;
}

// Ejemplo de uso:
// Creamos las listas A y B
const node1 = new Node(3);
const node2 = new Node(7);
const node3 = new Node(8);
const node4 = new Node(10);

const A = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

const B = new Node(99, new Node(1, node3));

const intersectionNode = findIntersection(A, B);
if (intersectionNode) {
  console.log("El nodo de intersección tiene el valor:", intersectionNode.value); // Salida: El nodo de intersección tiene el valor: 8
} else {
  console.log("No hay intersección entre las listas.");
}

Para encontrar el nodo con el valor 8 en las dos listas en tiempo O(M + N) y espacio constante, podemos utilizar un enfoque con dos punteros. Aquí te presento la implementación en JavaScript:

javascript

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findIntersection(A, B) {
  let ptrA = A;
  let ptrB = B;

  // Recorremos ambas listas hasta que se crucen o lleguen al final
  while (ptrA !== ptrB) {
    // Avanzamos los punteros en ambas listas, si llegan al final, los reasignamos al inicio de la otra lista
    ptrA = ptrA === null ? B : ptrA.next;
    ptrB = ptrB === null ? A : ptrB.next;
  }

  // Si ptrA o ptrB es null en este punto, significa que no hay intersección
  // Si hay intersección, devolvemos cualquiera de los dos punteros (ambos apuntan al nodo de intersección)
  return ptrA;
}

// Ejemplo de uso:
// Creamos las listas A y B
const node1 = new Node(3);
const node2 = new Node(7);
const node3 = new Node(8);
const node4 = new Node(10);

const A = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

const B = new Node(99, new Node(1, node3));

const intersectionNode = findIntersection(A, B);
if (intersectionNode) {
  console.log("El nodo de intersección tiene el valor:", intersectionNode.value); // Salida: El nodo de intersección tiene el valor: 8
} else {
  console.log("No hay intersección entre las listas.");
}
/*
En este código, utilizamos dos punteros ptrA y ptrB para recorrer ambas listas A y B. Avanzamos los punteros al siguiente nodo en cada iteración hasta que los dos punteros sean iguales (es decir, apunten al mismo nodo) o lleguen al final de las listas. En caso de que los punteros no se crucen, no hay intersección y retornamos null. Si los punteros se cruzan, significa que encontramos el nodo de intersección y lo devolvemos.

Este algoritmo tiene un tiempo de complejidad O(M + N), ya que como mucho recorrerá toda la longitud de ambas listas antes de encontrar la intersección o llegar al final. También utiliza un espacio constante, ya que no se utilizan estructuras de datos adicionales más allá de los punteros.*/

//-----------------------------------------------------------------------------------------------------------
anotherFn();

function anotherFn() {
  console.log(myNumber + myNumber);
}

let myNumber = 8;

/*Respuesta Correcta: B) Uncaught ReferenceError: myNumber is not defined
El error es debido a un concepto que puede ser un poco confuso al empezar en JavaScript: Hoisting.

Hoisting es una técnica de desplazamiento de declaraciones de variables y funciones. Cuando se declara una variable o una función, el código es desplazado hacia arriba, lo que significa que la variable o función puede ser utilizada antes de que se haya declarado.

El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript

Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código. (mdn)*/

const banda = {
  id: 1,
  nombre: 'Radiohead',
  'tipo de musica': 'Rock',
  albunes: ['Pablo Honey', 'Ok Computer', 'In Rainbows'],
};
banda.vocalista = undefined;
console.log('vocalista' in banda);
delete banda['tipo de musica'];
console.log('tipo de musica' in banda);

/*Respuesta Correcta: B) true, false
Existe diferencias entre declarar la propiedad de un objeto como undefined o eliminarla con el operador unario delete.

El objeto banda original no tiene la propiedad vocalista, pero lo agregamos con el valor undefined, entonces el objeto quedaria así:

  const banda = {
 id:1,
 nombre: "Radiohead",
 "tipo de musica": "Rock",
 albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"],
 vocalista: undefined
 };  



Pese a que el valor de vocalista es undefined la propiedad existe como tal dentro del objeto, es por ello que al verificarlo con el operador in obtenemos true.

Algo diferente pasa cuando eliminamos con delete la propiedad tipo de musica, esta deja de existir en el objeto, no tiene ningún tipo de valor, ni siquiera undefined, el objeto quedaría así:

  const banda = {
 id:1,
 nombre: "Radiohead",
 albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"],
 vocalista: undefined
 };  



Por ello al verificar nuevamente con in la existencia de una propiedad con la llave tipo de musica obtenemos false.*/