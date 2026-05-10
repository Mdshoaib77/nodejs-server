import { createServer } from "http";

const server : server = createServer((req : IncomingMessage,res)=>{
    console.log(req.url);
    console.log(req.method);

    const url = req.url
    const method = req.method

    if(url === '/' && method === "GET"){
        // console.log("This is Root Route");
        res.writeHead(200,{"content-type" : "application/json"})
        res.end(JSON.stringify({ message: "This is root route"}))
        
    }else if(url?.startsWith('/products')){
         res.writeHead(200,{"content-type" : "application/json"})
        res.end(JSON.stringify({ message: "This is product route"}))
    } else{
         res.writeHead(404,{"content-type" : "application/json"})
        res.end(JSON.stringify({ message: "route not found"}))
    }
},
);

server.listen(5000, () => {
    console.log("Server is running on the port 5000");
    
});