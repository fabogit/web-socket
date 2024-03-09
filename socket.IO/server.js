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
