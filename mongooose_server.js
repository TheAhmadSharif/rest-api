const express = require('express');
const app = express();


var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/book', 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true
   });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('connected', function() {
  console.log('Express connected successfully with MongoDB.');
});

const MyModel = mongoose.model('list', new mongoose.Schema({ 
	name: String
}));


const bookList = [
	"A Land Far from Home.",
	"Harry Potter",
	"The Diary of a Young Girl.",
	"War And Peace",
]

const kitty  = new MyModel({ name: `${Math.floor(Math.random() * 5 + 1)} ${new Date().toLocaleString()}` });

kitty.save((err, kitty) => {
	if (err) {
		return console.error(err);
	}
	else {
		console.log(`Save this ${kitty} document successfully.`);
	}
});



MyModel.find((err, data) => {
	if(err) {
		console.log(err);
	}
	else {
		console.log(data, 'data');
	}
})