let fs = require('fs');

fs.readFile('data.txt', 'utf8', function(error, data){
    //error - 에러발생시 에러 정보를 가져온다
    //data - 다읽은 데이터값을 들고 온다
   console.log(data);
});
console.log('file read end....');

function callback(error, data){
    //비동기 함수가 동작이 완료되면 시스템에 의해 이 함수가 호출된다
    //callback - 시스템에 의해 호출되는 함수 이다
    console.log(data + "이고은 콜백함수 부분임");
}
fs.readFile('data.txt', 'utf8', callback);

console.log("readfile end........")