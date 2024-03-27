// OS Module
const os = require('os');

// info about current user 
const user = os.userInfo()
console.log(user);

// Info about uptime of system 
console.log(`The Uptime of my legion is ${os.uptime} seconds ... which means ${(os.uptime)/60} minutes ... and ${(os.uptime)/60/60} hours`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: (os.totalmem()/(1024 * 1024 * 1024)),
    freeMem: (os.freemem()/(1024 * 1024 * 1024)),
}

console.log(currentOS);
