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