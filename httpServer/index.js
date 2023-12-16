const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {
    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`,'utf-8');
    const objData = JSON.parse(data);

    console.log('got request')
    if(req.url === "/"){
        res.end("Home page")
    }else if(req.url === "/about"){
        res.end("About page")
    }else if(req.url === "/cs"){
        res.writeHead(200,{"Content-Type": "text/html"})
        res.end("<h1>Contact Us page</h1>")
    }else if(req.url === "/user"){
        console.log(objData);
        res.writeHead(200,{"content-Type": "application/json"})
        res.end(JSON.stringify(objData[0]))
    }else{
        res.writeHead(404)
        res.end("error 404")
    }
})
server.listen(1234,'127.0.0.1',null,() => {
    console.log("server started at http://127.0.0.1:1234")
})
