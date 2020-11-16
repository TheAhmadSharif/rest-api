var http = require('http');

http.createServer((request, response) => {
		response.writeHead(200, {'Content-Type': 'text/html'});

		if(request.url === '/'){
	       response.end('Welcome');
	    }

	    if(request.url === '/courses'){
	       response.end('welcome to courses');
	    }

	    console.log('Server listening at port 3600...');


}).listen(3600);