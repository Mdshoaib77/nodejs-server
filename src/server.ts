// // // import { createServer } from "http";
// // // import { routeHandler } from "./routes/route";
// // // import { config, configDotenv } from "dotenv";

// // // const server : server = createServer((req : IncomingMessage,res)=>{
// // //     routeHandler(req, res);
// // // },
// // // );

// // // server.listen(config.port, () => {
// // //     console.log(`The server running on the port ${config.port}`);
    
// // // });

// // import { createServer, IncomingMessage, ServerResponse } from "http";
// // import { routeHandler } from "./routes/route";
// // // Import YOUR config file, not the dotenv function
// // import myConfig from "./config"; 

// // const server = createServer((req: IncomingMessage, res: ServerResponse) => {
// //     routeHandler(req, res);
// // });

// // // Use the imported object
// // server.listen(myConfig.port, () => {
// //     console.log(`The server running on the port ${myConfig.port}`);
// // });

// // src/server.ts

// import { createServer, IncomingMessage, ServerResponse } from "node:http";
// import { routeHandler } from "./routes/route";
// import config from "./config";

// const server = createServer(
//     (req: IncomingMessage, res: ServerResponse) => {
//         routeHandler(req, res);
//     }
// );

// server.listen(config.port, () => {
//     console.log(`The server running on the port ${config.port}`);
// });

import {
    createServer,
    IncomingMessage,
    ServerResponse,
} from "node:http";

import { routeHandler } from "./routes/route";
import config from "./config";

const server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        routeHandler(req, res);
    }
);

server.listen(config.port, () => {
    console.log(
        `The server running on the port ${config.port}`
    );
});