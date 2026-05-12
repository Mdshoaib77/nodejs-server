import { createServer } from "http";
import { routeHandler } from "./routes/route";

const server : server = createServer((req : IncomingMessage,res)=>{
    routeHandler(req, res);
},
);

server.listen(5000, () => {
    console.log("Server is running on the port 5000");
    
});