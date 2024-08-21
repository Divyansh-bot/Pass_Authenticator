const  http = require('http');
const fs = require('fs');

const port = process.env.PORT || 4000;

const server = http.createServer((req , res) => {

    res.setHeader('content-Type','text/html')
    console.log(req) 
    
    if (req.url == '/'){
        res.statusCode = 200;
        const web_2 = fs.readFileSync('TDS.html')
        res.end(web_2.toString())
    }
    else if (req.url == '/reg'){
        res.statusCode = 200;
        const web1 = fs.readFileSync('form_code2.html');
        res.end(web1.toString());
    }
    else if (req.url == '/animal_img1'){
        res.statusCode = 200;
        const web2 = fs.readFileSync('img_form.html');
        res.end(web2.toString());
    }
    else{
        res.statusCode = 404;
        res.end("<h1>hey this code was not found</h1>")
    }

})

server.listen(port,() => {
    console.log(`server is listerning on port ${port}`)
});