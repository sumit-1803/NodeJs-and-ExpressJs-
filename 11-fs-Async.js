// fs Module (async)
const {readFile , writeFile} = require('fs');

console.log("start");

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    // console.log(result);

    // After specifiying the encoding we can read the file 
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result;

    // Writing to a new file bieng generated named as result-async.txt
    // contents of first and second.txt will be used 
    writeFile('./content/result-async.txt',
    `Here is the result : ${first},${second}`
    ,(err,result)=>{
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);
        console.log("Done with this task");

    })
})
})
console.log("Starting the next task");


// Aysnc vs Sync 
// Asynchronous means that we offload the first task and work with other tasks too ... nodejs keeps serving other users as well 

// Alternatives includes using Async await and promises