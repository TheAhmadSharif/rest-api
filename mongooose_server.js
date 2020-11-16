const express = require('express');
const app = express();


var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/book';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const collectionModel = mongoose.model('list', { name: String });
const kitty = new collectionModel({ name: 3453 });



kitty.save().then((data, error) => {
			if(error) {
				
				res.status(500).send(error);
			} else {
				res.status(201).send(data);
			}
}).catch(err => { res.status(500).send(err) });

log e
		

