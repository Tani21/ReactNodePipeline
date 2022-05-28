const Console = require('console');
const http = require('http');
const fs = require('fs');


const port = process.env.port || 2000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url=="/"){
        res.statusCode=200;
        res.end('<h1>Heading home page</h1>');
    }

    else if(req.url=="/about"){
        res.statusCode=200;
        const indexfile = fs.readFileSync('index.html')
        res.end(indexfile.toString());
    }

    else{
        res.statusCode=404;
        res.end('<h1>This page cannot work</h1>');
    }
})

server.listen(port, ()=>{
    console.log("server is listening on port  ${port}");
});