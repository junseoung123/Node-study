let http = require('http');
http.createServer( function(request, response){
    response.writeHead( 200, {'Content-Type':'text/html', 'charset':'utf8'});
    response.end('<h1> Hello NodeServer2 </h1>');
}).listen(4500);