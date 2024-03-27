// HTTP Module 
// Allows us to setup a web server 

const http = require('http');

const server = http.createServer((req,res)=>{  //Request and Response
    if (req.url ==='/') {
    res.end('Welcome to our homePage')
}//Anything below this is really not needed i just did it for fun 
else if (req.url ==='/about') {
    res.end('Here is our Short history')
}
else if(req.url === '/Sumit'){
    res.end(
        `
        <style>
        * {
    background-color: grey; 
}
        </style>
        <h1 style='display:flex; justify-content:center; align-items:center;'  >This is what i made for my own learning </h1>
        <div style='display:flex; justify-content:center; align-items:center;' ><img  src="https://source.unsplash.com/500x500/?coding" alt="Flower Image" ></img></div>
        
        `
        )
}
else if (req.url === '/Example'){
    res.end(
        `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
        }
        h1 {
            margin: 0;
            padding: 20px 0;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <header>
        <h1>Simple Web Page</h1>
    </header>
    <div class="container">
        <p>This is a simple web page with HTML, CSS, and JavaScript.</p>
        <button id="clickMeBtn">Click Me!</button>
        <p id="message"></p>
    </div>

    <script>
        // JavaScript code to handle button click event
        document.getElementById("clickMeBtn").addEventListener("click", function() {
            document.getElementById("message").textContent = "Button clicked!";
        });
    </script>
</body>
</html>
`

    )
}
else{res.end(`
<h1>Oops!</h1>
<p>Cant seem to find the page you are looking for  ...</p>
<a href="/"><=== Back Home</a>
`);
}
});

server.listen(5000);