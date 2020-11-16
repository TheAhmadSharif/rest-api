const express = require("express");
let app = express();

const BookController = require("../Routes/BookController");


app.get('/book', BookController.getBook);

module.exports = app;