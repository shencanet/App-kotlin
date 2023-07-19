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