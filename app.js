const http = require('http');


// 서버 실행하면 실행되는 함수
function handleRequest(req, res) {
    if ( req.url === '/currenttime') {
      res.statusCode = 200; // 요청이 성공했는지 여부를 알리는 방법 ( 응답 시의 HTTP 상태 코드를 지정한다)
      res.end("<h1>"+ new Date().toISOString() + "</h1>"); // end를 실행해야 html 코드를 보낼 수 있음
    } else if (req.url === '/') {
      res.statusCode = 200;
      res.end("<h1>Hello~~</h1>"); // end를 실행해야 html 코드를 보낼 수 있음
    }
    
}
const server = http.createServer(handleRequest);

server.listen(4000);