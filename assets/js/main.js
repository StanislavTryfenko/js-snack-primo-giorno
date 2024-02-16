

const number = 100 ; /* number */

console.log(number);

let PI = 3.14 ; /* number */

console.log(PI); /* checking pi input */

PI = 3.1416 ; /* number */

console.log(PI); /* checking PI change */

const radius = 8 ; /* number */

console.log(radius); /* checking radius input */

const circle = (number * PI * radius); /* calc circle */

console.log(circle); /* checking circle result */ 

let name;

name = "Carlo"; /* string */

console.log(name); /* checking name status */ 

name = "Marco"; /* string */

console.log(name); /* checking name status */ 

let temperature; /* create a var */

temperature = 22.5; /* number */

console.log(temperature); /* checking temperature status */

temperature = (22.5 + 5); /* add +5 at let temperature */

console.log(temperature); /* checking temperature status */

/* 
 According due to: https://pages.di.unipi.it/milazzo/teaching/AA1011-ALG/JavaScript.pdf,
 unless u use Math.PI to rappresent 3.14, there is only their class:
 100 is an interer meanwhile 3.14 is a float.
*/

console.info("il mio messaggio");

/* 
 console.info vs console.log
 
 By searching on MDN and some forums i've got that
 there is no significantly difference as output between .log and .info
 some browsers just use a different visual in console,
 on the other hand, .info is specifically intented for logging informative messages like comments on the program,
 meanwhile .log is a method with a general purpouse for logging variables for debugging.

 there are also other commands like console.warning() and console.error() that are used to log messages with other purpouses.

*/