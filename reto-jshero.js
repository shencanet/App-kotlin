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
