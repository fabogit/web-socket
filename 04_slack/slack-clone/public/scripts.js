const socket = io("http://localhost:8000");

socket.on("connect", () => {
	console.log("Client connected");
	socket.emit("clientConnect");
});

socket.on("welcome", (data) => {
	console.log(data);
});
