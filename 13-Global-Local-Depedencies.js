// Local Dependency - way to download it locally for this particular project 
// npm i <NameofPackage>

// Global dependancy - ANy project
// npm i -g <Name>

// package.JSON - manifest  file (stores imporatant info about the project )
// npm init (way to make)(step by step asking questions)
// npm init -y (everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems);

// You just need to run npm i  to download all the dependancies of ur project after cloning it from github

console.log("Hello Beautiful People");

//Nodemon automatically restarts the app and does not asks u to run the node App.js again and again 

// npm uninstall bootstrap ===> deletes the files and the dependancy 

// Nucleear approach to delete thing is to 
// delete the node mudules folder and then delete the lock-json and run npm i again 

// Way to install nodemon globally 
// npm i -g nodemon 