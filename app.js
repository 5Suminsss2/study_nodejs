const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

// use : 어떤 요청이든 다 받아준다
// urlencoded : bodyparser를 설정하는 메서드 - js 객체로 변환
app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>"); // res.end와 같은 기능
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>'
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  // __dirname: 절대경로가 내장된 변수 또는 상수
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData); // js배열로 변환

  existingUsers.push(userName); // 배열 추가 ,
  fs.writeFileSync(filePath, JSON.stringify(existingUsers)); // 제이슨 형식을 따르는 원시 텍스트로 변환

  res.send("<h1>UserName stored!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(existingUsers);
});

app.listen(4000);