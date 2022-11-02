const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request, response) => {
    if(request.method == 'GET')
    {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        let data = fs.readFileSync('./html/index.html', 'utf8');
        response.end(data);
    } else if(request.method == 'POST')
    {
        request.on('data', function(data){
             response.writeHead(200, {'Constant-Type':'text/html'});
             response.end('<h1>' + data + '</h1>');
        });
    }
}).listen(4001);