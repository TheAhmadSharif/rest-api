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

const MyModel = mongoose.model('Kitten', new mongoose.Schema({ 
	name: Number
}));


const kitty  = new MyModel({ name: new Date().toLocaleString() });

kitty.save(function (err, kitty) {
	if (err) {
		return console.error(err);
	}
	else {
		console.log('success');
	}
});

