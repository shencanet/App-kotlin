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

