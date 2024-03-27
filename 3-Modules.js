// const john = 'John'
// const peter= 'Peter'

// const sayHi = (name) =>{
//     console.log(`Hello Mr/Mrs. ${name}`);
// }

const names = require('./4-Names');
const utils = require('./5-utils.Js');
const data = require('./6-alternative-ways');
require('./7-mind-grenade');
console.log(data);
console.log(names);


utils.sayHi('Sumit')
utils.sayHi(names.john)
utils.sayHi(names.peter)

// Anything above this was to demonstarte why we need modules in the first place ... this uses ES6 modeules from ReactJs 

//CommonJS Every file in Node is a module(by default) 
// MOdules - Encapsfulated Code (only share minimum)


