const lodash  = require("lodash");

let message = "Hello World!";
console.log(message);


let name = "eric";
console.log(name);

let revisedName = lodash.upperFirst(name);
console.log("new name:", revisedName);

console.log(lodash.lowerCase(name));
console.log(lodash.upperCase(name));
console.log(lodash.startCase(name));

console.log(lodash.lt(20, 10));