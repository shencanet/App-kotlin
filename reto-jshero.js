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
