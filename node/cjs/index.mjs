/*mjs--> para utilizar es modules
cjs--> para utilizar commonjs*/

import { mult, sub, sum } from "./sum.mjs";

console.log(sum(1, 2)); 
console.log(sub(1, 2));
console.log(mult(1, 2));

