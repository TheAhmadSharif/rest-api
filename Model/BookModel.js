const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
	"_id": String,
	"title": String,
	"author": String,
	"created_at": {
		type: String,
		default: Date.now
	}
});