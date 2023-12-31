const profesores = ['Oscar', 'Nico', 'Freddy', 'Christian', 'Angela'];
console.log(profesores.at(1)); //?
console.log(profesores.at(-1)); //?
console.log(profesores.at(10)); //?
console.log(profesores.at(3.8)); //?
console.log(profesores.at(-3.3)); //?

/*El método .at es una nueva forma de poder acceder a elementos de arreglos o a caracteres de cadenas.

Recibe como parámetro un número que representa en este ejemplo el índice al cual se quiere acceder.

.at(1) regresa el item "Nico" puesto que tiene el índice 1.
.at(-1) regresa el item "Angela", es una manera elegante de acceder al último item de un arreglo.
.at(10) regresa undefiend puesto que no existe un item con dicho índice en el arreglo.
.at(3.8) y .at(-3.3) solo tomaran la parte entera del parámetro, por ende tendremos .at(3) que regresa "Christian" y at.(-3) que regresa "Freddy".*/


const f = (arr) => Array.isArray(arr) && !arr.length;
console.log(f([1, 2, 3])); //?
console.log(f([0])); //?
console.log(f([])); //?
/*

Respuesta Correcta: D) false false true
Este ejemplo es bien sencillo pero abarca varios temas interesantes de javascript.

La función se encarga de verificar si un arreglo esta vacío o no, para ello hacemos una doble verificación:

Primero, corroboramos que el parámetro arr sea un arreglo, la manera más eficiente de hacerlo es usando el método isArray del objeto Array el cual regresa true si es un arreglo y false sino lo es.

Segundo, corroboramos que la longitud del arreglo sea 0 y convertimos esa salida a boolean para poder hacer una comparación de boeleanos con el operador de corto circuito &&.

Veamos caso por caso:

[1,2,3], es un arreglo pero no esta vacío. Entonces tendriamos: true && false, que evalua a false.

[0], es un arreglo y tampoco esta vacío. Entonces tendriamos: true && false, que evalua a false.

[] es un arreglo y si esta vacío. Entonces tendriamos: true && true, que evalua a true.

Conclusión: false false true.*/

//--------------------Ejercicio 4--------------------
/*
Dada una cadena con caracteres repetidos, reorganice la cadena para que no haya dos caracteres adyacentes iguales. Si esto no es posible, devuelve None .

Por ejemplo, dado "aaabbc", podría devolver "ababac". Dado "aaab", devuelve None . */

function reorganizeString(s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    const maxHeap = [];
    for (const char in charCount) {
        maxHeap.push({ char, count: charCount[char] });
    }
    
    maxHeap.sort((a, b) => b.count - a.count);
    
    let prevChar = '';
    const result = [];
    
    while (maxHeap.length > 0) {
        const current = maxHeap.shift();
        
        if (current.char === prevChar) {
            if (maxHeap.length === 0) {
                return null;
            }
            
            const next = maxHeap.shift();
            maxHeap.push(current);
            current.char = next.char;
            current.count = next.count;
        }
        
        result.push(current.char);
        prevChar = current.char;
        
        if (current.count > 1) {
            maxHeap.push({ char: current.char, count: current.count - 1 });
        }
        
        maxHeap.sort((a, b) => b.count - a.count);
    }
    
    return result.join('');
}

// Ejemplos
const inputStr1 = "aaabbc";
const inputStr2 = "aaab";

const outputStr1 = reorganizeString(inputStr1);
const outputStr2 = reorganizeString(inputStr2);

console.log(outputStr1);  // Output: "ababac" (o cualquier otra reorganización válida)
console.log(outputStr2);  // Output: null

/*
Esta implementación utiliza un enfoque similar al anterior, utilizando un arreglo para representar un montículo (heap) y ordenando el arreglo cada vez que se inserta un nuevo elemento. Si no es posible reorganizar la cadena de manera que no haya caracteres adyacentes iguales, devuelve null. Ten en cuenta que, al igual que en la implementación anterior, existen múltiples reorganizaciones posibles para cadenas que cumplen con los criterios, por lo que el resultado podría variar.*/