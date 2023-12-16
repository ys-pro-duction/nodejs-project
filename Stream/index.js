const fs = require('fs');
const http = require('http');


const server = http.createServer((req,res)=>{
    console.log("server started");
})

server.listen(1234,'127.0.0.1',()=>{
    console.log("listening server");
})
server.addListener('request',(req,res)=>{
    console.log("request goted");
    const rstream = fs.createReadStream("./files/name.txt",'utf8')
    rstream.addListener("data",(chunkdata)=>{
        res.write(chunkdata)
    })
    rstream.addListener('end',()=>{
        res.end()
    })
})