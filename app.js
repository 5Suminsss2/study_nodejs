const fs = require('fs');
const path = require("path");

const express = require('express');

const app = express();

app.use(express.static('public')); // 제공하려는 정적 파일을 보관해야하는 프로젝트의 폴더 이름
app.use(express.urlencoded({ extended: false }));

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

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurant.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect('/confirm'); // confirm 페이지로 이동하기
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