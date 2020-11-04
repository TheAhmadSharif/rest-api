const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);



app.get('/', (request, response) => {
    response.send("Hello World");
});


app.get('/users/:userId', (request, response) => {
    return response.send(
      `Get HTTP method on ${request.params.userId} resource`,
    );
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port${port}`));
