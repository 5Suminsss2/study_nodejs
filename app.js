const path = require("path");

const express = require('express');

const app = express();

app.use(express.static('public')); // 제공하려는 정적 파일을 보관해야하는 프로젝트의 폴더 이름

app.get('/', function(req, res) {
    const htmlFilePath = path.join(__dirname, "views", "index.html");
    res.sendFile(htmlFilePath);
});

app.get("/restaurants", function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
    res.sendFile(htmlFilePath);
});

app.get("/recommend", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  res.sendFile(htmlFilePath);
});

app.get("/confirm", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  res.sendFile(htmlFilePath);
});

app.get("/about", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "about.html");
  res.sendFile(htmlFilePath);
});

app.listen(4000);