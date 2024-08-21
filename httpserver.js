const  http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader('content-Type','text/html')
    res.end('<h1>This is tesing page<h1> <p>this is a testing paragraph line<p>')

})

server.listen(port,() => {
    console.log(`server is listerning on port ${port}`)
});