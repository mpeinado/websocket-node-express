// reference https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4
// Smart Websocket Client
// ws://localhost:7777


const  express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// init the server
const server = http.createServer(app);

// init a WebSocket server instance
const wss = new WebSocket.Server({server}); 

wss.on('connection', (ws) => {
    // connectin is up, add simple event
    ws.on('message', (message) => {
        console.log(`recived  ${message}`);
        ws.send(`Hello, you send -> ${message}`);
    });

    // send immediatly a feedback to the incoming connection
    ws.send('Hi There, I am a websocket server');

    setTimeout(() => {
        ws.send('So.. what are you up to?');
    }, 2000)
});

// start over
server.listen(process.env.PORT || 7777, () => {
    console.log(`Server started on port ${server.address().port}`);
});
