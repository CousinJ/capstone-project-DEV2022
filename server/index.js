const express = require("express");

const cors = require("cors");

const http = require("http");

const { Server } = require("socket.io");

const app = express();
const port = 3001;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const playerArray = [];

io.on("connection", (socket) => {
  console.log(socket.id);
  
 

  socket.once("initialize-player", (arg) => {
    playerArray.push(arg);
    arg.id = playerArray.length
    arg.role = Math.floor(Math.random() * 2)
    arg.turn = false
    arg.playing = false
    if(playerArray.length === 1) {
        arg.turn = true
        arg.playing = true
    }

    console.log(playerArray)
    
      
      io.emit('start-game', playerArray)

    ;
  });


socket.on('sending-prophecy', (arg) => {console.log(arg)
io.emit('r-prophecy', arg)
})

socket.on('switch-play', () => {playerArray.forEach((el) => {el.playing = !el.playing}); console.log(playerArray)
      io.emit('turnt', playerArray)
})

});

server.listen(port, () => {
  console.log(`SERVER IS RUNNING ${port}`);
});
