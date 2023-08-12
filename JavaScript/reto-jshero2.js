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

//------------------Escribir archivos------------------
const banda = {
  id: 1,
  nombre: 'Radiohead',
  'tipo de musica': 'Rock',
  albunes: ['Pablo Honey', 'Ok Computer', 'In Rainbows'],
};
console.log(banda['nom' + 'bre']);
/*Respuesta Correcta: A) Radiohead
En JavaScript hay dos maneras de acceder a las propiedades de un objeto, con la notación de punto y con la notación de corchetes.

Usamos la notación de punto cuando conocemos el nombre literal de la propiedad a la que queremos acceder. La key a la que accedemos con esta notación debe ser un nombre de variable válido.

La notación de corchetes se diferencia en que todo lo que este dentro de los corchetes debe ser un string y es evaluado por JavaScript como una expresión.

Por este motivo, cuando hacemos console.log(banda["nom"+"bre"]) el lenguaje evalua los corchetes concatenando las cadenas de texto y mostramos por consola Radiohead.*/

//-----------------------------------------------------------------------------------------------------------

function fruits() {
  if (true) {
    var fruit1 = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();
/*
Respuesta Correcta: A) ReferenceError: fruit2 is not defined
ES6 introdujo las variables let y const. Con eso, introdujo el alcance de bloque.

El alcance del bloque significa que las variables definidas dentro de un bloque de código {} solo se pueden usar dentro de él.*/

//-----------------------------------------------------------------------------------------------------------

let objeto1 = { valor: 10 };
let objeto2 = objeto1;
let objeto3 = { valor: 10 };
console.log(objeto1 == objeto2);
console.log(objeto1 == objeto3);
objeto1.valor = 15;
console.log(objeto2.valor);
console.log(objeto3.valor);

/*Respuesta Correcta: A) true, false, 15, 10
Al trabajar con objetos en javascript hay que difereciar 2 aspectos fundamentales: tener 2 referencias al mismo objeto y tener 2 objetos diferentes pero con las mismas propiedades.

Al crear objeto1 estamos reservando un espacio en memoria para guardar dicho objeto. Cuando asignamos objeto1 a objeto2 lo único que hacemos es que ambos objetos apunten a la misma dirección de memoria donde esta almacenado el objeto1. En otras palabras, tanto objeto1 y objeto2 no son independientes el uno del otro, si modificamos uno el otro también se vera afectado.

Como ambos apuntan a la misma dirección de memoria entonces al usar el operador débil de comparación == obtenemos true.

Pero si comparamos el objeto1 contra el objeto3 tendremos false puesto que si bien ambos tienen las mismas propiedades, estan almacenados en direcciones de memoria diferentes.

Para finalizar, cuando hacemos:

  objeto1.valor = 15;
 console.log(objeto2.valor);
 console.log(objeto3.valor);  



Modificamos el valor de objeto1 pero como apuntan a la misma dirección de momoria entonces también modificamos el valor del objeto2 a 15.

El objeto3 no sufre ningún cambio.*/

//-----------------------------------------------------------------------------------------------------------
const banda = 'Coldplay';
const canciones = ['Yellow', 'Fix You', 'Trouble'];
console.log(banda['length']);
console.log(canciones['len' + 'gth']);

/*Respuesta Correcta: C) 8, 3
Tanto cadenas como arreglos son iterables, entonces podemos usar la nomenclatura de corchetes para acceder a sus valores.

Todo lo que este dentro de los corchetes será evaluado como expresión, entonces ambos casos se ejecutaran correctamente, el primero solo ejecuta el método length y el segundo concatena ambas cadenas para finalmente ejecutar length para el arreglo./*/

//-----------------------------------------------------------------------------------------------------------

console.log(undefined || '0' || null || (undefined ?? 0));


/*Respuesta Correcta: B) "0"
El operador de corto circuito OR (||) solo se ejecuta si el primer operando es falsy. El nullish coalescing operator (??) solo se ejecuta si el primer operando es nullish (null o undefined).

Vamos paso por paso:

undefined || "0": undefined evalua como falsy entonces tendriamos "0". Nos quedaria el siguiente código:

  console.log("0" || null || (undefined ?? 0))  



"0" || null: "0" no evalua como falsy entonces no se ejecuta el operador de corto circuito. Nos quedaria el siguiente código:

  console.log("0" || (undefined ?? 0))  



undefined ?? 0: Operando tenemos como resultado 0 por que undefined es un valor nullish. Nos quedaria el siguiente código:

  console.log("0" || 0)  



Finalmente "0" como cadena no es un valor falsy entonces no podemos ejecutar el operador de corto circuito dando como resultado final "0".*/

/-----------------------------------------------------------------------------------------------------------
function sumar(a, b) {
  return a + b;
}
sumar(2, 4);

/*Respuesta Correcta: B) Declarativa
En JavaScript tenemos dos tipos diferentes de funciones: Las Funciones Declarativas y las Funciones Expresivas.

Funciones Declarativas: Este tipo de funciones se caracteriza principalmente por el hecho de que son generadas haciendo uso de la palabra reservada function al inicio de la declaración.
function saludar(nombre) { console.log(`Hola ${nombre}`); } saludar("Platzi💚");
Funciones Expresivas: A diferencia de las funciones de tipo declarativas, estas no requieren el uso de la palabra reservada function al inicio y, en cambio, son generadas a través de la asignación a una variable que albergará la función, estas funciones son creadas comúnmente como una función anónima, aunque también pueden llegar a ser nombradas.
let saludar = function(nombre) { console.log(`Hola ${nombre}`); } saludar("Platzi💚")
Diferencias:

- Las funciones declarativas se ven afectadas por el hoisting mientras que las expresivas no.

- Las funciones declarativas pueden ser invocadas inclusive antes de ser declaradas en el orden secuencial del código, debido de igual manera al efecto ocasionado por el hoisting.

- Contrario a lo anterior, una función expresiva únicamente puede ser invocada luego de haber sido generada en el orden lógico del código a causa de que esta no es afectada por el hoisting. */

//-----------------------------------------------------------------------------------------------------------
const fruits = [
  { id: 1, name: 'Kiwi', quantity: 5 },
  { id: 2, name: 'Banana', quantity: 30 },
  { id: 3, name: 'Pineapple', quantity: 3 },
];

const count = fruits.some((fruit) => fruit.quantity > 30);

/*Respuesta Correcta: B) false
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. */


//-----------------------------------------------------------------------------------------------------------
console.log(typeof ('22' - 0));
/*
Respuesta Correcta: A) number
Podemos convertir un string valido a number tan solo restandole 0. Es un hack interesante y una alternativa valida a usar el objeto Number, la función parseInt o el operador +.

El operador - solo cumple la tarea de realizar una resta en javascript, cuando se lo aplicamos a un string valido entonces el interprete tiene que convertir dicha cadena a number y luego realizar la operación, entonces nos aprovechamos de que el 0 es neutro aditivo para que la conversión sea exitosa.

Si intentamos usar este hack con cadenas no numéricas la conversión se realiza pero obtendremos un NaN como resultado, así que mucho ojo con eso.

  console.log(typeof("aaa" - 0)); // number 
 console.log(("aaa" - 0)); // NaN  */

 //-----------------------------------------------------------------------------------------------------------
 const numeros = [1, 2, 3, 4, 5];
numeros.length = 0;
console.log(numeros); // ?

/*Respuesta Correcta: C) []
El método lenght es un getter y un setter al mismo tiempo, esto quiere decir que podemos obtener valores y podemos establecer los mismos dependiendo de lo que se necesite.

En este caso usar length y "setterlo" a 0 es una buena manera de borrar todos los elementos de un arreglo./
*/
//-----------------------------------------------------------------------------------------------------------
const arr = [];
console.log(Array.isArray(arr)); // ??

/*Respuesta Correcta: A) true
Una manera adecuada de comprobar que un arreglo es efectivamente un arreglo es usar el constructor Array con su método isArray.

Como arr es un arreglo (vacío pero arreglo al fin), entonces regresamos true.

Como los arreglos no son un tipo de dato per se en JavaScript, la mejor manera de comprobar si un arreglo es un arreglo es de esta manera.

¿Te cuento un secreto? Esta pregunta es bastante frecuente en entrevistas laborales, pero shhh, no se lo digas a nadie 👀*/

//-----------------------------------------------------------------------------------------------------------
console.log(typeof null == 'object'); // ?
/*Respuesta Correcta: A) true
Pese a que null es un primitivo, debido a un bug del lenguaje su tipo de dato es object.

Este bug es muy antiguo y se determino que no vale la pena arreglarlo al día de hoy ya que se pueden romper muchos programas que pueden depender de esta error.

Este bug es bastante conocido en programadores experimentados y usado en entrevistas laborales para estimar tu conocimiento del lenguaje.*/

//-----------------------------------------------------------------------------------------------------------
const nombre = 'Alejandro';
console.log(nombre.split(''));
console.log([...nombre]);
console.log(Array.from(nombre));

/*Respuesta Correcta: A) Los 3 imprimen: ["A","l","e","j","a","n","d","r","o"]
split es un String Method que se encarga de convertir una cadena en arreglo, donde cada item del arreglo lo determina el separador que recibe split como parámetro. Como le pasamos una cadena vacía entonces Alejandro se convierte en ["A","l","e","j","a","n","d","r","o"].

Spread Operator (...) expandirá o propagará la cadena Alejandro en ["A","l","e","j","a","n","d","r","o"]. El Spread Operator no solo funciona con arreglos, también puede ser usado con cadenas.

Array.from es desde ES6 una manera más de convertir cadenas a arreglos, tambiém regresa ["A","l","e","j","a","n","d","r","o"]. */

//-----------------------------------------------------------------------------------------------------------
console.log('hola'.split('').reverse().join('')); // ?

/*Respuesta Correcta: D) "aloh"
Estos 3 métodos de cadenas se preguntan mucho en entrevistas. Veamos paso por paso que sucede:

Aplicamos split:
split convierte una cadena en arreglo dependiendo del parámetro que se le pase, en este caso una cedena vacía: ["h","o","l","a"].

Aplicamos reverse:
reverse es un método de arreglos, invierte todos los elementos del arreglo: ["a","l","o","h"].

Aplicamos join:
join es un método de arreglos que convierte un arreglo en cadena nuevamente dependiendo del parámetro que se le pase, en este caso una cadena vacía: "aloh"*/

//-----------------------------------------------------------------------------------------------------------
//A
const multiplicar = (a) => (b) => a * b;
//B
const test = (nombre, accion) => {
  return accion(nombre);
};
console.log(test('Ana', console.log)); //Ana (por consola)

/*Respuesta Correcta: C) Ambas
Por definición una Higher Order Function es:

1. Una función que regresa otra función. 2. Una función que puede tener funciones en sus parámetros.

multiplicar aunque no lo parezca regresa otra función, podría escribirse también de la siguiente manera:

  function multiplicar(a){
 return function(b){
 return a * b;
 }
 }  



Acá se observa mejor que multiplicar regresa una función anónima que realiza la operación del producto, es mucho más sencillo usar retornos implícitos para poder escribir lo mismo en una sola línea como en el ejemplo original.

test recibe 2 parámetros, uno de ellos es una función que en el ejemplo es console.log de javascript nativo, esto es motivo suficiente para que sea considera una Higher Order Function.  */

//-----------------------------------------------------------------------------------------------------------
const numeros = [1, 2, [3, 4], 5, 6, [7, 8], 9, 0];
console.log(numeros.flat()); // ?

/*Respuesta Correcta: B) [1,2,3,4,5,6,7,8,9,0]
flat es un array method que crea un nuevo arreglo con los elementos concatenados recursivamente hasta una profundidad especificada.
Dicho en otras palabras, permite "aplanar" un arreglo anidado un número determinado de veces. Es una buena alernativa a usar por ejemplo reduce para hacer lo mismo y no muchos devs conocen que existe esta catacterística en el lenguaje.*/
//-----------------------------------------------------------------------------------------------------------
var nombre = 'Camila';
let apellido = 'Rodriguez';
const edad = 25;
const getDatosPersonales = () => {
  console.log(nombre);
  console.log(apellido);
  console.log(edad);
};
console.log(getDatosPersonales());
/*
Respuesta Correcta: A) Camila, Rodriguez, 25
Independientemente de la palabra reservada con la que declaremos una variable (var, let, const), esta tendrá scope global siempre y cuando no este dentro de un bloque o dentro de una función. Por este motivo nombre, apellido y edad son variables de scope global y por ello pueden ser accedidas desde la función getDatosPersonales*/

const person = { name: 'nico', age: 28 };
const newPerson = person;
newPerson.name = 'santi';
console.log(person.name);

/*Respuesta Correcta: B) santi
En JavaScript existen dos tipos de asignaciones por referencia vs. por valor y esta diferencia es clave, ya que puede producir comportamientos inesperados.

La asignación por valor funciona en los valores primitivos, como por ejemplo:

let  numberA = 45;
let numberB =  numberA;
numberA = 99;
console.log( numberB); // 45

En el caso anterior numberB tiene el valor 45, diferente para arrays, funcions y objetos, en donde se hace una asignación por referencia:

const objA = {age: 45};
const objB =  objA;
objA.age = 99;
console.log( objB.age); // 99

Quiere decir que no estamos copiando el valor, sino la referencia, por lo tanto, un cambio en él puede tener consecuencias en otro.*/

//-----------------------------------------------------------------------------------------------------------
const test = {
  if: 'Es un condicional',
  let: 'Es una manera de declarar variables',
  for: 'Es un bucle',
};
console.log(test.for); //??
/*

Respuesta Correcta: B) Es un bucle
Dentro de un objeto literal es posible usar nombres de palabras reservadas del lenguaje como nombres de keys, esto es perfectamente valido.

❌ Pese a que es valido, se recomienda no hacer esto y respetar las palabras reservadas de javascript. ¡No hagas nunca esto! Solo se conciente que es posible.*/

let nombre = 'Cris';
let edad = 25;
console.log('Mi nombre es %s y tengo %d', nombre, edad);

Respuesta Correcta: C) Mi nombre es Cris y tengo 25
En javascript como en java es posible usar sustituciones de variables con el operador % seguido de un caracter que especifica el tipo de dato que se pretende imprimir. En este caso, $s reemplaza un string ("Cris") y %d reemplaza un valor decimal o dígito numérico (25).

Este método de imprimir por consola no es muy usado, ni siquiera es conocido, pero esta bueno saber que existe.