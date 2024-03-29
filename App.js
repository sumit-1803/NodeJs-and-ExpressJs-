// NodeJs eventloops 
// Offloading operations to system kernel whenever possible 

// Basically loops ko skip karke next line ko run kardo aur phir wapas aajao ... This saves time and helps render the whole website faster 

// Example1
// const {readFile} = require('fs')

// console.log("Started the first task");
// readFile("./content/first.txt",'utf8',(err,result)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(result);
//     console.log("completed first task");
// })
// console.log("Starting second task");

// Example2
// console.log("first");
// setTimeout(() => {
//     console.log("Second");      
// }, 0);
// console.log("Third");

//Example3
// setInterval(() => {
//     console.log("Hello World");
// }, 2000);
// console.log("I Will Run First");

// Process stays alive unless
// Kill Process control ctrl + c
// Unexpected error

// Example4
const http = require('http')

const server = http.createServer((req,res)=> {
    console.log("request event");
    res.end("Hello World")
})

server.listen(5000, ()=>{
    console.log("Server listening on port : 5000 .....");
})

// Anything that keeps on going is asynchronous like server.listen or setInterval 