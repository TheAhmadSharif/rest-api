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
	@param {} request  // Object
	@param {} response

*/
app.post('/', (request, response) => {
   let dataList = data;
   let newData = request.body;
   let update_data = [...dataList, newData]
   fs.writeFile("db/data.json", JSON.stringify(update_data), "utf8", function() {
      response.send({success: true});
    });
});

/*  Code Written by Ahmad Sharif
	@Update partial By Id 
	@param {} request  // id
	@param {} response

*/
app.patch('/:id', (request, response) => {
    var id = request.params.id;
    fs.writeFile("data1.json", JSON.stringify(data), "utf8", function() {
      response.send({success: true});
    });
});


/*  Code Written by Ahmad Sharif
	@Update Object By Id
	@param {} request  // id
	@param {} response
*/
app.put('/:id', (request, response) => {
  var id = request.params.id;
  response.send("Put Method");
});


/*  Code Written by Ahmad Sharif
	@Delete one By Id
	@param {} request  // id
	@param {} response

*/
app.delete('/:id', (request, response) => {
  let dataList = data;
  var id = request.params.id;

  var lists = data.filter(x => {
    return x.id != id;
  });

  if (lists === undefined || lists.length == 0) {
	    response.send(`The id: ${post_id} does not match any document. `)
  } else {
  		fs.writeFile("db/data.json", JSON.stringify(lists), "utf8", function() {
		    response.send({success: true});
		});
  }
  
});

const server = app.listen("3200", () => {
	const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is running at ${host} address and port ${port}`);
});