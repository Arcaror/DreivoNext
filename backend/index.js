
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer((req, res) => {
  if (req.url !== "/") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  res.write("erz")
  res.end();
});

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);

  socket.on("fetchLastPredi", ( data)=>{
    console.log(`interval ${data.predi.name}`)
    socket.emit("reload",{
      predi: data
    })
  })

  


  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });
});


async function getPredi(){
  
  const res3 = await fetch('http://localhost:3000/api/predict')
  return predi = await res3.json()
}


httpServer.listen(3001);
