const http = require('http');
const hostname = '127.0.0.1'; //localhost ip주소
const port = 4000;

const server = http.createServer((req, res)=>{
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/html");
   res.end('<h1 style="color:blue"> Hello Node Server1</h1> <br>')
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}: ${port}/`);
})