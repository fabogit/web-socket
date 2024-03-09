import path from "path";
import express from "express";
import { Server } from "socket.io";

const app = express();

// absolute path to the 'public' directory
const publicPath = path.join(new URL(".", import.meta.url).pathname, "public");
// Serve static files from the 'public' directory
app.use(express.static(publicPath));

const expressServer = app.listen(8000);
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id, "Server connected");
  // will emit event from the server
  const now = new Date().toISOString();
  socket.emit("messageFromServer", { data: `Socket server payload at ${now}` });

  // listener will catch incoming event from the client
  socket.on("messageFromClient", (data) => {
    console.log(data);
  });
});
