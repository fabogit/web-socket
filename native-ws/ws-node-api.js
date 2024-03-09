import http from "http";
import * as ws from 'ws';


const httpServer = http.createServer((req, res) => {
	res.end('Connected');
});

// ws server will listen to http server
const wsServer = new ws.WebSocketServer({
	server: httpServer
});

// headers emitted before handshake to upgrade to ws protocol
wsServer.on('headers', (headers, req) => {
	console.log(headers);
});

// handshake is complete
wsServer.on('connection', (websocket, req) => {
	// console.log(websocket)
	websocket.send('Websocket server');
	// listen to client buffer
	websocket.on('message', (data) => {
		console.log(data.toString());
	});
});

httpServer.listen(8000, () => {
	console.log('Http server is up');
});