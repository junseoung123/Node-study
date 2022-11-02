const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request, response) =>{
    pathName = url.parse(request.url).pathname; //웹브라우저의 입력 주소를 그대로 가져오기
    if(request.method="get" && pathName == '/')
    {
        response.writeHead(200, {'Content-Type':'text/html'});
        let uri = request.url; //http://localhost:4000/?name=홍길동&age=27;
        let query = url.parse(uri, true).query; //parse() 문자열을 JSON객체로 변환
        // ?name=홍길동&age=27 query문임
        console.log(query.name);
        console.log(query.age);

        response.end(JSON.stringify(query));

}}).listen(4000, function(){
    console.log('서버2_1이 켜졌습니다. 클라이언트가 요청하기를 기다리고있습니다')
});
