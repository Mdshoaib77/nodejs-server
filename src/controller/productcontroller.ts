// import type { IncomingMessage, ServerResponse } from "node:http";
// import { readProduct } from "../service/product.service";
// import { parseBody } from "../utility/parseBody";
// import { log } from "node:console";

// export const productController async(req,res)=> 
// (req : IncomingMessage,res : ServerResponse,

// )=>{

//     console.log("Request", req);
    

//      const url = req.url;
//     const method = req.method;


//     const urlParts = url?.split("/");
//     // console.log(urlParts);
//     const id = urlParts && urlParts[1] === 'products' ? Number(urlParts [2]) : null;

//     // console.log("This is the actual id : ", id);
    

//  if(url === "/products" && method === "GET"){

//     // const products = [
//     //     {
//     //         id : 1,
//     //         name : "products - 1",
//     //     },
//     // ];
//    const products = readProduct();


//      res.writeHead(200,{"content-type" : "application/json"})
//         res.end(JSON.stringify({ message: "Alhamdulliah Product Retrived Sucessfully",
//              data: products, 
//         }));


//  } else if(method === "GET" && id !== null){
// const products = readProduct();
// const product = products.find((p: Iproduct)=>p.id === id);

// // console.log(product);

// res.writeHead(200,{"content-type" : "application/json"})
//         res.end(JSON.stringify({ message: "Alhamdulliah Products Retrived Sucessfully",
//              data: product, 
//         }),
//     );
//    } else if(method === "POST" && url === '/products') {

//     const body = await parseBody(req);
// console.log(body);


//     res.writeHead(200,{"content-type" : "application/json"})
//         res.end(JSON.stringify({ message: "Alhamdulliah Products Retrived Sucessfully",
//             //  data: product, 
//         }),
//     );
//    }
// };

import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../service/product.service";
import { parseBody } from "../utility/parseBody";
import type { Iproduct } from "../interface/product.interface";

export const productController = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {

    console.log("Request", req);

    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/");

    const id =
        urlParts && urlParts[1] === "products"
            ? Number(urlParts[2])
            : null;

    if (url === "/products" && method === "GET") {

        const products = readProduct();

        res.writeHead(200, {
            "content-type": "application/json",
        });

        res.end(
            JSON.stringify({
                message: "Alhamdulliah Product Retrived Sucessfully",
                data: products,
            })
        );

    } else if (method === "GET" && id !== null) {

        const products = readProduct();

        const product = products.find(
            (p: Iproduct) => p.id === id
        );

        res.writeHead(200, {
            "content-type": "application/json",
        });

        res.end(
            JSON.stringify({
                message: "Alhamdulliah Products Retrived Sucessfully",
                data: product,
            })
        );

    } else if (method === "POST" && url === "/products") {

        const body = await parseBody(req);

        console.log("Body",body);

        res.writeHead(200, {
            "content-type": "application/json",
        });

        res.end(
            JSON.stringify({
                message: "Alhamdulliah Products Created Sucessfully",
                data: body,
            })
        );

    } else {

        res.writeHead(404, {
            "content-type": "application/json",
        });

        res.end(
            JSON.stringify({
                message: "Route Not Found",
            })
        );
    }
};