const express = require('express');

const app = express();

// use : 어떤 요청이든 다 받아준다
// urlencoded : bodyparser를 설정하는 메서드 - js 객체로 변환
app.use(express.urlencoded({extended: false}))

app.get('/currenttime', function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>"); // res.end와 같은 기능
});

app.get("/", function (req, res) {
    res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>'); 
});

app.post('/store-user', function (req, res) {
    const userName = req.body.username;
    console.log(userName);
    res.send('<h1>UserName stored!</h1>');
})

app.listen(4000);