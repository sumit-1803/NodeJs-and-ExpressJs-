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