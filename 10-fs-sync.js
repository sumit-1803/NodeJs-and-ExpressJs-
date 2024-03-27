// Basically this is being used for reading and accessing files in system 

// Fs Module(Sync)
const {readFileSync,writeFileSync, readFile}=require('fs');

console.log("start");

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first);
console.log(second);

// Making a new file and write with contents of first and second.txt 
// writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`)

// way to append to already existing 
writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'})

console.log("Done with the task");
console.log("Starting the next one");


// In Synchronous everything goes line by line and others users wont be able to get served by node js to read the files simultaneously 