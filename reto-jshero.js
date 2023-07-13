let Alimento = function (comida) {
    this.comida = comida;
  };
  
  Alimento.prototype.comerHoy = () => console.log('Hoy toca comer:', this.comida);
  const alimento = new Alimento('ensalada');
  
  alimento.comerHoy(); //❓
/*Respuesta Correcta: D) Hoy toca comer: undefined
Una de las limitaciones de las funciones flecha (arrow functions), es que no tiene sus propias referencias a this o super y no se debe usar como métodos.

this siempre apuntará a this desde el contexto en el que definimos la función (ejemplo window).

Por tal razón, la función flecha () => { ... } no sabe de this.comida, por lo que this.comida es undefined.*/
//======================================================================================================
//======================================================================================================
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item); //🤔?
}

for (let item of myLifeSummedUp) {
  console.log(item); //🤔?
}/*
Respuesta Correcta: A) 0 1 2 3 y "☕" "💻" "🍷" "🍫"
Con el bucle for-in, podemos iterar sobre propiedades enumerables. Los enumerables en el arreglo son justamente sus índices. Por ello es 0 1 2 3.

Con un bucle for-of, podemos recorrer iterables. Un arreglo por definición es un iterable, en cada iteración la variable item es igual al elemento sobre el cual se itera en ese momento. Por ello es "☕" "💻" "🍷" "🍫".

En la practica los bucles for-of son más usados y ocacionalmente los bucles for-in.*/

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error!', e);
  }
}

sayHi();

/*Respuesta Correcta: D) "Oh no an error! Hello world!"
La función greeting con la palabra reservada throw genera una excepción de tipo string en el código.

La función sayHi consta de una sentencia try...catch, recordemos que si no hay ningún tipo de excepción el código ejecuta el bloque try pero como si generamos una excepción entonces entramos al bloque catch donde el parámetro e adopta el valor de la excepción, osea, Hello world!. Por eso el resultado es "Oh no an error! Hello world!"/

*/
const arrl = [2, 4, 6];

const arr2 =[3, 5, 7];


console.log([...arr1, ...arr2]);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

const timesThree = (num) => num * 3;

//Una función pura es aquella que, dada una misma entrada, siempre regresa el mismo valor de salida y no tiene otro efecto secundario observable.

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
}, 0);

/*Respuesta Correcta: A) 🥑
Al llamar a getStatus debemos tener el cuenta el scope de las variables, recuerda que tanto let como const tienen scope de bloque, por ende buscara una variable status dentro del bloque de data y regresara el emoji de palta.*/

function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }
  return message;
}
console.log(checkAge(21)); //🤔?

/*Respuesta Correcta: C) ReferenceError
const tiene scope de bloque para las variables, cuando intentamos hacer return message la variable message no puede ser accedida. Tanto message en el bloque if como en el else son variables diferentes por que estan en bloques diferentes pese a que se llaman igual. Como no es posible acceder a la variable la respuesta es ReferenceError.*/

console.log('I want pizza'[0]); //🤔?
/*Las cadenas de texto en javascript son iterables, por ello, al igual 
que con los arreglos es posible acceder a sus caracteres individuales con la notación de corchetes.*/


/*
 Dado un conjunto de caracteres C y un entero k , una secuencia de De Bruijn es una secuencia cíclica en la que cada posible cadena de caracteres de longitud k en C aparece exactamente una vez.

Por ejemplo, suponga que C = {0, 1} y k = 3 . 
{'000', '001', '010', '011', '100', '101', '110', '111'}
 00010111

Cree un algoritmo que encuentre una secuencia de De Bruijn. */
function generateDeBruijnSequence(C, k) {
  const n = Math.pow(C.length, k); // Longitud total de la secuencia
  const sequence = []; // Secuencia de De Bruijn

  // Función recursiva para generar la secuencia
  function generateSequence(node) {
    for (let i = 0; i < C.length; i++) {
      const char = C[i];
      const nextNode = node + char;
      
      if (sequence.indexOf(nextNode) === -1) {
        sequence.push(nextNode);
        if (sequence.length === n) {
          return;
        }
        generateSequence(nextNode.slice(1));
      }
    }
  }

  const initialNode = '0'.repeat(k - 1);
  generateSequence(initialNode);
  sequence.push(initialNode); // Agregar el nodo inicial al final para formar una secuencia cíclica
  return sequence.join('');
}

// Ejemplo de uso:
const C = ['0', '1'];
const k = 3;
const deBruijnSequence = generateDeBruijnSequence(C, k);
console.log(deBruijnSequence);
/*En este algoritmo, se utiliza una función recursiva llamada generateSequence para generar la secuencia de De Bruijn. Comienza con un nodo inicial de longitud k-1 lleno de ceros. Luego, en cada paso, se genera un nuevo nodo agregando un carácter de C al final del nodo actual. Se verifica si el nuevo nodo ya está presente en la secuencia; si no lo está, se agrega a la secuencia y se llama recursivamente a la función con el último carácter del nuevo nodo eliminado (para mantener el tamaño de k). El proceso continúa hasta que la secuencia tenga una longitud igual a n (todas las cadenas de caracteres posibles de longitud k en C).

Finalmente, se agrega el nodo inicial al final de la secuencia para hacerla cíclica. La secuencia resultante se devuelve como una cadena de caracteres.

En el ejemplo de uso proporcionado, el código generará una secuencia de De Bruijn con el conjunto de caracteres C = ['0', '1'] y k = 3, y la imprimirá en la consola.*/

function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}
sum(10); //🤔?

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
let newList = [1, 2, 3].push(18);
console.log(newList); //🤔?
console.log(newList.push(5)); //🤔?
/*Respuesta Correcta: D) TypeError: newList.push is not a function
El método push regresa la longitud de un arreglo y no el arreglo en si mismo, podemos ver este comportamiento si hacemos lo siguiente:

  let newList = [1, 2, 3].push(4);
 
 console.log(typeof newList); // number  



Después de aplicar por primera vez el método push, newList ahora ya no es un arreglo, sino un primitivo de tipo number entonces cuando intentam*/

function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}
getItems(["banana", "apple"], "pear", "orange"); //🤔?
/*Respuesta Correcta: D) SyntaxError
Cuando vemos en la lista de parámetros de una función la sintaxis de tres puntos ... nos referimos a lo que se denomina un paramétro de tipo REST. En el cuerpo de la función este tipo de parámetro se trata como un arreglo pero siempre debe estar declarado al final de la lista de parámetros, caso contrario tendremos un error de sintaxis.

Si volvemos a escribir la función pero esta vez teniendo en cuenta lo anterior dicho:

  function getItems(fruitList, favoriteFruit, ...args) {

 return [...fruitList, ...args, favoriteFruit]

 }

 console.log(getItems(["banana", "apple"], "pear", "orange"));  


*/
const info = {
  [Symbol('a')]: 'b'
}
console.log(info); 🤔?
console.log(Object.keys(info)); 🤔?
/*Respuesta Correcta: D) {Symbol("a"): "b"} y []
Una variable de tipo Symbol cumple con 3 caracteristicas principales

    No es un elemento enumerable.
    Permite representar valores completamente únicos en el código, útil para crear llaves de objetos y evitar colisiones.
    Podemos crear propiedades ocultas en objetos.



El primer console.log imprime el objeto en su totalidad, incluyendo los valores no enumerables, por ello podemos ver la key de tipo Symbol y su valor un string con valor b.

Al intentar obtener las keys del objeto con Object.keys obtendremos un arreglo vacio justamente por que el Symbol no es un elemento que se pueda enumerar, de esta manera es posible "ocultar" ciertas propiedades de un objeto.
//------------------------------------------------------------------------------------------
Escriba un programa que compruebe si un número entero es un palíndromo. Por ejemplo, 121 es un palíndromo, así como 888 . 678 no es un palíndromo. No convierta el número entero en una cadena. */

function esPalindromo(numero) {
  if (numero < 0 || (numero % 10 === 0 && numero !== 0)) {
    return false;
  }
  
  let numeroInvertido = 0;
  let num = numero;
  
  while (num > numeroInvertido) {
    numeroInvertido = (numeroInvertido * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  
  return num === numeroInvertido || num === Math.floor(numeroInvertido / 10);
}

// Ejemplos de uso:
console.log(esPalindromo(121)); // true
console.log(esPalindromo(888)); // true
console.log(esPalindromo(678)); // false
console.log(esPalindromo(-10)); // FALSE
console.log(esPalindromo(1010)); // false


/*Este programa utiliza un enfoque matemático para revertir el número mientras se comprueba si es un palíndromo. Si el número es negativo o termina con cero (excepto el número 0 en sí), se considera que no es un palíndromo. Luego, se utiliza un bucle while para invertir la mitad del número y se compara con la otra mitad original para verificar si es un palíndromo. */

//------------------------------------------------------------------------------------------
/*Escriba un programa que encuentre el número de ocurrencias de cada elemento en una matriz. Por ejemplo, si la entrada es [1, 1, 2, 2, 2, 3] , la salida debe ser algo como esto:*/


function contarOcurrencias(arr) {
  const ocurrencias = {};
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i];
    if (ocurrencias[elemento]) {
      ocurrencias[elemento]++;
    } else {
      ocurrencias[elemento] = 1;
    }
  }
  return ocurrencias;
}

// Ejemplo de uso:
const arr = [1, 1, 2, 2, 2, 3];
const ocurrencias = contarOcurrencias(arr);
console.log(ocurrencias);
/*Este programa utiliza un objeto para almacenar el número de ocurrencias de cada elemento. Luego, se recorre la matriz y se incrementa el número de ocurrencias de cada elemento en el objeto. Finalmente, el objeto se devuelve como resultado.*/

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

function imprimirBoustrophedon(raiz) {
  if (!raiz) {
    return [];
  }
  
  const resultado = [];
  const cola = [raiz];
  let nivelActual = 1;
  
  while (cola.length > 0) {
    const nivel = [];
    const longitudCola = cola.length;
    
    for (let i = 0; i < longitudCola; i++) {
      const nodo = cola.shift();
      
      if (nivelActual % 2 === 1) {
        nivel.push(nodo.valor); // Insertar de izquierda a derecha
      } else {
        nivel.unshift(nodo.valor); // Insertar de derecha a izquierda
      }
      
      if (nodo.izquierda) {
        cola.push(nodo.izquierda);
      }
      
      if (nodo.derecha) {
        cola.push(nodo.derecha);
      }
    }
    
    resultado.push(...nivel);
    nivelActual++;
  }
  
  return resultado;
}

// Crear el árbol
const raiz = new Nodo(1);
raiz.izquierda = new Nodo(2);
raiz.derecha = new Nodo(3);
raiz.izquierda.izquierda = new Nodo(4);
raiz.izquierda.derecha = new Nodo(5);
raiz.derecha.izquierda = new Nodo(6);
raiz.derecha.derecha = new Nodo(7);

// Imprimir los nodos en orden de boustrophedon
console.log(imprimirBoustrophedon(raiz)); // [1, 3, 2, 4, 5, 6, 7]
/*En este ejemplo, creamos un árbol binario con los valores proporcionados y luego llamamos a la función imprimirBoustrophedon pasando la raíz del árbol. La función utiliza una cola para realizar un recorrido en anchura, alternando el orden de inserción de los nodos en cada nivel según el patrón de boustrophedon. Finalmente, devuelve un arreglo con los valores de los nodos en el orden especificado.*/

//------------------------------------------------------------------------------------------
const name = "Lydia"

console.log(name()) //🤔?

/*Respuesta Correcta: C) TypeError
name no es ni hace referencia a una función, no tiene sentido intentar invocar a un string como si fuera una función.

No pude ser SyntaxError por que no se cometio ningún error de tipeo, el código no esta mal escrito pero tampoco es un código valido. No puede ser ReferenceError por que no hay problemas de referencia al intentar acceder a la variable name.

Se genera una excepción de tipo TypeError cuando un valor no es del tipo esperado, entonces se lanza un TypeError: name is not a function!*/

//------------------------------------------------------------------------------------------
/*Dada una lista de números y un número k , devuelve si dos números cualesquiera de la lista suman k .

Por ejemplo, dado [10, 15, 3, 7] y k de 17 , devuelve verdadero ya que 10 + 7 es 17 .

Bonificación: ¿Puedes hacer esto en una sola pasada? 

Sí, es posible resolver este problema en una sola pasada utilizando un enfoque de hash table (tabla hash) en JavaScript. Aquí tienes una implementación que cumple con los requisitos:*/

function encuentraSuma(lista, k1) {
  var complementos = {};

  for (var i = 0; i < lista.length; i++) {
    var num = lista[i];
    var complemento = k1 - num;

    if (complementos[complemento]) {
      return true;
    }

    complementos[num] = true;
  }

  return false;
}

// Ejemplo de uso
var lista = [10, 15, 3, 7];
var k1 = 23;

console.log(encuentraSuma(lista, k1)); // Devuelve true
//------------------------------------------------------------------------------------------
/*
Dado un grafo no dirigido G, compruebe si es bipartito. Recuerda que un grafo es bipartito si sus vértices se pueden dividir en dos conjuntos independientes, U y V, de modo que ninguna arista conecte los vértices del mismo conjunto. 
Para comprobar si un grafo no dirigido G es bipartito, puedes utilizar el algoritmo de búsqueda en anchura (BFS) para colorear los vértices en dos conjuntos diferentes*/
function esBipartito(grafo) {
  const visitados = {};
  const colores = {};

  // Obtener el primer vértice del grafo
  const primerVertice = Object.keys(grafo)[0];
  colores[primerVertice] = 0;

  // Utilizar una cola para realizar la búsqueda en anchura
  const cola = [primerVertice];

  while (cola.length > 0) {
    const verticeActual = cola.shift();

    // Verificar si el vértice actual ha sido visitado
    if (visitados[verticeActual]) {
      continue;
    }

    visitados[verticeActual] = true;

    // Recorrer los vecinos del vértice actual
    for (const vecino of grafo[verticeActual]) {
      if (!colores[vecino]) {
        // Asignar un color diferente al vecino
        colores[vecino] = 1 - colores[verticeActual];
        cola.push(vecino);
      } else if (colores[vecino] === colores[verticeActual]) {
        // Si el vecino tiene el mismo color, el grafo no es bipartito
        return false;
      }
    }
  }

  return true;
}

// Ejemplo de grafo no dirigido
const grafo = {
  A: ['B', 'C'],
  B: ['A', 'C'],
  C: ['A', 'B', 'D'],
  D: ['C']
};

if (esBipartito(grafo)) {
  console.log("El grafo es bipartito");
} else {
  console.log("El grafo no es bipartito");
}
//------------------------------------------------------------------------------------------
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list)) //🤔?
console.log(getUser(user)) //🤔?

//------------------------------------------------------------------------------------------
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y); //🤔?
}

/*Respuesta Correcta: A) name Lydia y age 21
El método entries del constructor Object regresa un arreglo anidado donde cada sub arreglo corresponde a la llave y valor del objeto:

  [ [ "name", "Lydia" ], [ "age", 21 ] ]  



Con el bucle for...of iteramos sobre el objeto desestructurando los valores con la sintaxis [x, y].

El primer sub arreglo es [ "name", "Lydia" ] donde x toma el valor name y y toma el valor Lydia.

El segundo arreglo es [ "age", 21 ] donde x toma el valor age y y toma el valor 21.*/

//------------------------------------------------------------------------------------------
'use strict';

function myFunction() {
  return (pi = 3.1416);
}

console.log(myFunction());
/*
El modo estricto nos permite escribir código más seguro, habilita restricciones a nuestro código, En myFunction() no vamos a poder usar variables no declarada como es el caso de "pi".*/

//------------------------------------------------------------------------------------------
/* Dada una matriz de enteros, encuentre el primer entero positivo faltante en tiempo lineal y espacio constante. En otras palabras, encuentre el entero positivo más bajo que no existe en la matriz. La matriz también puede contener duplicados y números negativos.

Por ejemplo, la entrada [3, 4, -1, 1] debería dar 2 . La entrada [1, 2, 0] debería dar 3 .

Puede modificar la matriz de entrada en el lugar. */

function encontrarEnteroFaltante(matriz) {
  const n = matriz.length;

  // Paso 1: Mover todos los números positivos hacia la parte izquierda de la matriz
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (matriz[i] > 0) {
      // Intercambiar el número positivo con el número en la posición j
      [matriz[i], matriz[j]] = [matriz[j], matriz[i]];
      j++;
    }
  }

  // Paso 2: Marcar los elementos presentes
  for (let i = 0; i < j; i++) {
    const num = Math.abs(matriz[i]);
    if (num <= j) {
      // Marcar el elemento en la posición num-1 como negativo
      matriz[num - 1] = -Math.abs(matriz[num - 1]);
    }
  }

  // Paso 3: Encontrar el primer entero positivo faltante
  for (let i = 0; i < j; i++) {
    if (matriz[i] > 0) {
      // Si el elemento es positivo, el índice (i+1) es el entero faltante
      return i + 1;
    }
  }

  // Si todos los números del 1 al j están presentes, el entero faltante es j+1
  return j + 1;
}

// Ejemplo de uso:
const matriz1 = [3, 4, -1, 1];
console.log("El primer entero positivo faltante en la matriz [3, 4, -1, 1] es:", encontrarEnteroFaltante(matriz1));

const matriz2 = [1, 2, 0];
console.log("El primer entero positivo faltante en la matriz [1, 2, 0] es:", encontrarEnteroFaltante(matriz2));


//------------------------------------------------------------------------------------------
const fruits = [
  { id: 1, name: 'Lime', quantity: 5 },
  { id: 2, name: 'Apple', quantity: 30 },
  { id: 3, name: 'Pineapple', quantity: 3 },
];

const count = fruits.some((fruit) => fruit.quantity > 5);

/*Respuesta Correcta: A) true
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. */

//------------------------------------------------------------------------------------------
const fruits = [
  { id: 1, name: 'Lime', quantity: 5 },
  { id: 2, name: 'Apple', quantity: 30 },
  { id: 3, name: 'Pineapple', quantity: 3 },
];

const count = fruits.some((fruit) => fruit.quantity > 5);
/*El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. */

//------------------------------------------------------------------------------------------
const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;/*

Respuesta Correcta: B) Impossible! You should see a therapist after so much JavaScript lol
Muchas cosas que analizar en este ejemplo.

La sintaxis de backtick o de comillas simples invertidas (alt+96) sirven para evaluar expresiones dentro de cadenas de texto.

Primera expresión a evaluar:

En ${[] && Im} tenemos el operador de corto circuito &&. Para usar los operadores de corto circuito debemos tener en cuanta los valores truthy y falsy. Si la primera parte de la expresión evalua como truthy entonces ejecutamos la segunda parte de la expresión.

Los valores truthy son: true, {}, [], cualquier valor de tipo number (42, -56, 1.5, -6.33), cualquier string que no sea vacio ("0", "Hola mundo", "false"), el objeto Date (new Date()).

Volviendo al ejemplo, un arreglo vacio [] es truthy entonces se ejecuta la segunda parte de la expresion, osea, el string Im.

Segunda expresión a evaluar: En $"" && n t} nuevamente tenemos el operador de corto circuito &&, esta vez la primera parte de la expresión es un valor falsy.

Los valores falsy son: false, 0, "" (cualquier cadena vacía), undefined, null, NaN

La primera parte de la expresión es una cadena vacía que vendría a representar un valor falsy y por ello la segunda parte de la expresión n t no se ejecuta.

En conclusión, la respuesta es: Impossible! You should see a therapist after so much JavaScript lol*/

const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;
console.log(one, two, three); // 🤔?

/*Respuesta Correcta: C) {} "" []
En javascript el código se lee de arriba hacia abajo y de izquierda a derecha.

Para la variable one: false || {} || null

Primero evaluamos false || {} y obtenemos {}.
Entonces nos queda {} || null y como las llaves vacías es un valor truthy entonces el null no se evalua dando como resultado {}.

Para la variable two: null || false || "" Primero evaluamos null || false, null es falsy entonces si ejecutamos false.
Entonces nos queda false || "", y obtenemos como resultado la cadena vacía "".

Para la variable three: [] || 0 || true Primero evaluamos [] || 0, el arreglo vacío es un valor truthy por lo que 0 no se ejecuta. Entonces nos queda [] || true, nuevamente el arreglo vacío es truthy y esta vez es true quien no se llega a ejecutar, entonces el resultado es [].*/

//------------------------------------------------------------------------------------------
const myPromise = () => Promise.resolve('I have resolved!');
function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log('second');
}
async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}
firstFunction();
secondFunction();

/*Respuesta Correcta: D) second, I have resolved! y I have resolved!, second
firstFunction es una función simple que llama a myPromise usando el método then propio de las promesas. Por Event Loop las promesas pasan al Task Queue entonces primero ejecutamos el console.log y mostramos second por consola, ahora el Call Stack esta vacío y la promesa que estaba en la Task Queue pasa al Call Stack y resolvemos la promesa mostrando I have resolved!.

secondFunction es una función asíncrona, al llamar a myPromise con await esperamos el tiempo necesario para que la promesa se ejecute, entonces mostramos primero por consola I have resolved! y luego second.

Cuando tenemos sintaxis async await escribimos código de manera síncrona pero se ejecuta de manera asíncrona.

Puedes aprender un poco más sobre asincronia en javascript en los siguientes videos:

Event Loop: Entender el asincronismo en JavaScript

Asincronismo en JavaScript 


Dada una lista de enteros, escribe una función que devuelva la mayor suma de números no adyacentes. Los números pueden ser 0 o negativos.

Por ejemplo, [2, 4, 6, 2, 5] debería devolver 13 , ya que elegimos 2 , 6 y 5 . [5, 1, 1, 5] debería devolver 10 , ya que elegimos 5 y 5 .

Seguimiento: ¿Puedes hacer esto en tiempo O(N) y espacio constante? */

function maxNonAdjacentSum(nums) {
  if (nums.length === 0) {
    return 0; // Si la lista está vacía, la suma máxima es 0
  }

  let prevMaxSum = 0; // Suma máxima considerando el elemento anterior
  let currMaxSum = 0; // Suma máxima considerando el elemento actual

  for (let i = 0; i < nums.length; i++) {
    const temp = currMaxSum; // Guardamos la suma máxima anterior antes de actualizarla

    // La nueva suma máxima considera el elemento actual y la suma máxima anterior sin el elemento actual
    currMaxSum = Math.max(currMaxSum, prevMaxSum + nums[i]);

    // La suma máxima anterior se actualiza con la suma máxima anterior sin el elemento actual
    prevMaxSum = temp;
  }

  return currMaxSum; // Devolvemos la suma máxima considerando todos los elementos
}

// Ejemplo 1
const nums1 = [2, 4, 6, 2, 5];
const result1 = maxNonAdjacentSum(nums1);
console.log(result1); // Output: 13

// Ejemplo 2
const nums2 = [5, 1, 1, 5];
const result2 = maxNonAdjacentSum(nums2);
console.log(result2); // Output: 10

/*Sí, puedo ayudarte a escribir una función en JavaScript que resuelva este problema y tenga un tiempo de ejecución O(N) y espacio constante. Aquí tienes el código paso a paso con ejemplos:

javascript

function maxNonAdjacentSum(nums) {
  if (nums.length === 0) {
    return 0; // Si la lista está vacía, la suma máxima es 0
  }

  let prevMaxSum = 0; // Suma máxima considerando el elemento anterior
  let currMaxSum = 0; // Suma máxima considerando el elemento actual

  for (let i = 0; i < nums.length; i++) {
    const temp = currMaxSum; // Guardamos la suma máxima anterior antes de actualizarla

    // La nueva suma máxima considera el elemento actual y la suma máxima anterior sin el elemento actual
    currMaxSum = Math.max(currMaxSum, prevMaxSum + nums[i]);

    // La suma máxima anterior se actualiza con la suma máxima anterior sin el elemento actual
    prevMaxSum = temp;
  }

  return currMaxSum; // Devolvemos la suma máxima considerando todos los elementos
}

// Ejemplo 1
const nums1 = [2, 4, 6, 2, 5];
const result1 = maxNonAdjacentSum(nums1);
console.log(result1); // Output: 13

// Ejemplo 2
const nums2 = [5, 1, 1, 5];
const result2 = maxNonAdjacentSum(nums2);
console.log(result2); // Output: 10

En el código, utilizamos dos variables prevMaxSum y currMaxSum para realizar un seguimiento de la suma máxima considerando el elemento anterior y la suma máxima considerando el elemento actual, respectivamente. Iteramos por la lista de números y en cada paso, actualizamos estas variables utilizando la relación de recursión currMaxSum = max(currMaxSum, prevMaxSum + nums[i]). Al final, devolvemos la suma máxima considerando todos los elementos.

El código tiene un tiempo de ejecución O(N), donde N es el número de elementos en la lista, ya que solo recorremos la lista una vez. También utiliza espacio constante, ya que solo se utilizan dos variables adicionales sin importar el tamaño de la lista.*/

//------------------------------------------------------------------------------------------
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };
compareMembers(person);
/*Respuesta Correcta: B) They are the same!
Tanto el parámetro person1 como person2 adoptará el valor de person, osea el objeto { name: "Lydia" }.

Los objetos se pasan por referencia. En el ejemplo, person1 y person2 apuntan a la misma dirección de memoria entonces la condición del if no se cumple y pasamos a imprimir They are the same!.*/

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];
console.log(colorConfig.colors[1]);

/*😥Respuesta incorrecta
    Proximo acertijo:
Compartir:
Respuesta Correcta: D) TypeError
En javascript existen 2 maneras de acceder a las propiedades de los objetos, por notación del punto o por notación de corchetes.

Cuando hacemos colorConfig.colors[1] literalmente estamos buscando una propiedad colors en el objeto colorConfig y como no existe esta propiedad entonces obtenemos un undefiend, entonces ahora javascript intentará hacer undefined[1] y esto no es un código valido, por ello la consola muestra un TypeError.

Cuando queremos usar variables para hacer lo que se denomina acceso a propiedades dinámicas de objetos necesitamos usar la notación de corchetes: colorConfig[colors[1]] que nos devolverá true, el valor de la propiedad red del objeto colorConfig.*/