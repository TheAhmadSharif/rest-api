var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var fs = require("fs");
var data = require('./db/data.json');


/* Code Written by Ahmad Sharif
	@get all data
	@param {} request
	@param {} response
*/
app.get('/', (request, response) => {
	  response.header("Content-Type",'application/json');
  	  response.send(JSON.stringify(data));
});



/*  Code Written by Ahmad Sharif
	@Get Specific Data  By Id
	@param {} request // 1,2, n
	@param {} response

*/

app.get('/:id', function (request, response) {
	  let dataList = data;
	  let post_id = request.params.id;
	  let dataObject = dataList.filter((object) => {
	      return object.id == post_id;
	  });


	  if (dataObject === undefined || dataObject.length == 0) {
		    response.send(`The id: ${post_id} does not match any document. `)
	  } else {
	  		response.send(dataObject);
	  }
});

/* 
	Code Written by Ahmad Sharif
	@Insert new one
	@param {} request  
	@param {} response

*/
app.post('/', (request, response) => {
   let dataList = data;
   let newData = request.body;
	   if (newData.hasOwnProperty('id') && newData['id'] && 
	   	   newData.hasOwnProperty('title') && newData['title'] &&
	   	   newData.hasOwnProperty('body') && newData['body']) {

		   	let update_data = [...dataList, newData];
		    fs.writeFile("db/data.json", JSON.stringify(update_data), "utf8", function() {
		      	response.send("A new data has been inserted successfully.");
		    });

	   }
	   else {
	   		response.send("Please send a valid data object");
	   }

   
});

/*  Code Written by Ahmad Sharif
	@Update partial By Id 
	@param {} request  // id
	@param {} response

*/
app.put('/:id', (request, response) => {
	  let dataList = data;
	  let post_id = request.params.id;
	  let newData = request.body;
	  let index = null;
	  let dataObject = dataList.filter((object, i) => {
		  	  if(object.id == post_id) {
		  	  		index = i;
		  	  		return object;
		  	  }
	  });

	  if (dataObject === undefined || dataObject.length == 0) {
		    response.send(`The id: ${post_id} does not match any document.`)
	  } 
	  else if (newData.hasOwnProperty('id') && newData['id'] && 
	   	   newData.hasOwnProperty('title') && newData['title'] &&
	   	   newData.hasOwnProperty('body') && newData['body']) {
		  		dataList[index] = body_data;
		  		fs.writeFile("db/data.json", JSON.stringify(dataList), "utf8", function() {
			      	response.send('Data has been updated successfully');
			    });
	  	  		
	  }
  	  else {
  	  		response.send("Please send a valid data object");
  	  }   
    
});
/*  Code Written by Ahmad Sharif
	@Update Object By Id
	@param {} request  // id
	@param {} response
*/
app.patch('/:id', (request, response) => {
   	  let dataList = data;
	  let post_id = request.params.id;
	  let newData = request.body;
	  let index = null;
	  let dataObject = dataList.filter((object, i) => {
		  	  if(object.id == post_id) {
		  	  		index = i;
		  	  		return object;
		  	  }
	  });

	  if (dataObject === undefined || dataObject.length == 0) {
		    response.send(`The id: ${post_id} does not match any document.`)
	  } 
	  else if (newData.hasOwnProperty('id') && newData['id'] && 
	   	   newData.hasOwnProperty('title') && newData['title']) {
		  		dataList[index]["title"] = body_data["title"];

		  		fs.writeFile("db/data.json", JSON.stringify(dataList), "utf8", function() {
			      	response.send('Data has been updated successfully');
			    });
	  	  		
	}
	  else {
	  		response.send("Please send a valid data object");
	  }    

});


/*  Code Written by Ahmad Sharif
	@Delete one By Id
	@param {} request  
	@param {} response
*/
app.delete('/:id', (request, response) => {
  	  let dataList = data;
	  let post_id = request.params.id;
	  let dataObject = dataList.filter((object) => {
	      return object.id == post_id;
	  });


	  if (dataObject === undefined || dataObject.length == 0) {
		    response.send(`The id: ${post_id} does not match any document. `)
	  } else {
	  		response.send(dataObject);
	  }
  
});

const server = app.listen("3200", () => {
	const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is running at ${host} address and port ${port}`);
});