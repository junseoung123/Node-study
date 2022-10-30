let fs = require('fs');
try{
   let data = fs.readFileSync('data.txt', 'utf8');
   console.log(data);
}catch(e){
    console.log('파일명을 찾을 수 없습니다.');
    console.log(e);
}

