const express = require('express');

const app = express();

app.get('/currenttime', function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>"); // res.end와 같은 기능
});

app.get("/", function (req, res) {
    res.end("<h1>Hello~~</h1>"); 
});

app.listen(4000);