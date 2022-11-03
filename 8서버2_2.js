const http = require('http');
const hostname = '127.0.0.1'; //만약, 원격 서버인경우 원격서버의 ip주소를 입력하빈다
const port = 4000;
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');

const server = http.createServer((request, response)=>{
     //정보를 요청받은 url 정보를 콘솔로 출력하기
     console.log(request.url);
     //pathname 구하기
     let pathName = url.parse(request.url,true).pathname;
     console.log(pathName);

     if(request.method == 'POST'&&pathName == '/person')
     {
        request.on('data', (data)=>{
            let params = new URLSearchParams(data.toString());
            console.log(data.toString());
            console.log(params);
            console.log("name :", params.get("name"));
            console.log("age :", params.get("age"));
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end('<h1> post query receive...... </h1>');
        })
     }
});

server.listen(port, hostname,()=>{
    console.log("서버2_2이 구동됨 실행방법 http://127.0.0.1:4000/person");
});