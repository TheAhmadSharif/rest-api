const express = require('express');
const app = express();
const port = 3600;
const square = require('./square');


console.log('The area of a square with a width of 4 is ' + square.area(4));



app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}!')
});