// // import type { IncomingMessage, ServerResponse } from "node:http";
// // import { readProduct } from "../service/product.service";
// // import { parseBody } from "../utility/parseBody";
// // import { log } from "node:console";

// // export const productController async(req,res)=> 
// // (req : IncomingMessage,res : ServerResponse,

// // )=>{

// //     console.log("Request", req);
    

// //      const url = req.url;
// //     const method = req.method;


// //     const urlParts = url?.split("/");
// //     // console.log(urlParts);
// //     const id = urlParts && urlParts[1] === 'products' ? Number(urlParts [2]) : null;

// //     // console.log("This is the actual id : ", id);
    

// //  if(url === "/products" && method === "GET"){

// //     // const products = [
// //     //     {
// //     //         id : 1,
// //     //         name : "products - 1",
// //     //     },
// //     // ];
// //    const products = readProduct();


// //      res.writeHead(200,{"content-type" : "application/json"})
// //         res.end(JSON.stringify({ message: "Alhamdulliah Product Retrived Sucessfully",
// //              data: products, 
// //         }));


// //  } else if(method === "GET" && id !== null){
// // const products = readProduct();
// // const product = products.find((p: Iproduct)=>p.id === id);

// // // console.log(product);

// // res.writeHead(200,{"content-type" : "application/json"})
// //         res.end(JSON.stringify({ message: "Alhamdulliah Products Retrived Sucessfully",
// //              data: product, 
// //         }),
// //     );
// //    } else if(method === "POST" && url === '/products') {

// //     const body = await parseBody(req);
// // console.log(body);


// //     res.writeHead(200,{"content-type" : "application/json"})
// //         res.end(JSON.stringify({ message: "Alhamdulliah Products Retrived Sucessfully",
// //             //  data: product, 
// //         }),
// //     );
// //    }
// // };




// // import type { IncomingMessage, ServerResponse } from "node:http";
// // import { insertProduct, readProduct } from "../service/product.service";
// // import { parseBody } from "../utility/parseBody";
// // import type { Iproduct } from "../interface/product.interface";

// // export const productController = async (
// //     req: IncomingMessage,
// //     res: ServerResponse,
// // ) => {

// //     console.log("Request", req);

// //     const url = req.url;
// //     const method = req.method;

// //     const urlParts = url?.split("/");

// //     const id =
// //         urlParts && urlParts[1] === "products"
// //             ? Number(urlParts[2])
// //             : null;

// //     if (url === "/products" && method === "GET") {

// //         const products = readProduct();

// //         res.writeHead(200, {
// //             "content-type": "application/json",
// //         });

// //         res.end(
// //             JSON.stringify({
// //                 message: "Alhamdulliah Product Retrived Sucessfully",
// //                 data: products,
// //             })
// //         );

// //     } else if (method === "GET" && id !== null) {

// //         const products = readProduct();

// //         const product = products.find(
// //             (p: Iproduct) => p.id === id
// //         );

// //         res.writeHead(200, {
// //             "content-type": "application/json",
// //         });

// //         res.end(
// //             JSON.stringify({
// //                 message: "Alhamdulliah Products Retrived Sucessfully",
// //                 data: product,
// //             })
// //         );

// //     } else if (method === "POST" && url === "/products") {

// //         // Created Products by post method

// //         const body = await parseBody(req);

// //         const products = readProduct();

// //         // console.log("Body",body);

// //         const newProduct = {
// //             id: Date.now(),
// //             ...body,
// //         };

// //         // console.log(newProduct);

// //         products.push(newProduct);

// //         // console.log(products);

// //         insertProduct(products);

// //         res.writeHead(200, {
// //             "content-type": "application/json",
// //         });

// //         res.end(
// //             JSON.stringify({
// //                 message: "Alhamdulliah Products Created Sucessfully",
// //                 data: products,
// //                 // data: body,
// //             })
// //         );

// //     } else if (method === "PUT" && id !== null) {

// //         const body = await parseBody(req);

// //         const products = readProduct();

// //         const index = products.findIndex(
// //             (p: Iproduct) => p.id === id
// //         );

// //         console.log(index);

// //         if (index === -1) {

// //             res.writeHead(404, {
// //                 "content-type": "application/json",
// //             });

// //             res.end(
// //                 JSON.stringify({
// //                     message: "Product Not Found",
// //                 })
// //             );

// //         } else {

// //             products[index] = {
// //                 ...products[index],
// //                 ...body,
// //             };

// //             insertProduct(products);

// //             res.writeHead(200, {
// //                 "content-type": "application/json",
// //             });

// //             res.end(
// //                 JSON.stringify({
// //                     message: "Product Updated Successfully",
// //                     data: products[index],
// //                 })
// //             );
// //         }

// //     } else {

// //         res.writeHead(404, {
// //             "content-type": "application/json",
// //         });

// //         res.end(
// //             JSON.stringify({
// //                 message: "Route Not Found",
// //             })
// //         );
// //     }
// // };




// import type { IncomingMessage, ServerResponse } from "node:http";
// import { insertProduct, readProduct } from "../service/product.service";
// import { parseBody } from "../utility/parseBody";
// import { Iproduct } from "../interface/product.interface";
// import { sendResponse } from "../utility/sendResponse";

// export const productController = async (
//     req: IncomingMessage,
//     res: ServerResponse,
// ) => {

//     console.log("Request", req);

//     const url = req.url;
//     const method = req.method;

//     const urlParts = url?.split("/");

//     const id =
//         urlParts && urlParts[1] === "products"
//             ? Number(urlParts[2])
//             : null;

//     if (url === "/products" && method === "GET") {

//         const products = readProduct();

//         res.writeHead(200, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: "Alhamdulliah Product Retrived Sucessfully",
//                 data: products,
//             })
//         );

//     } else if (method === "GET" && id !== null) {

//         const products = readProduct();

//         const product = products.find(
//             (p: Iproduct) => p.id === id
//         );

//         if(!product){
//                res.writeHead(404, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: " Product NOt FOund",
//                 data: null,
//             }),
//         );
//         }

//         res.writeHead(200, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: "Alhamdulliah Products Retrived Sucessfully",
//                 data: product,
//             })
//         );

//     } else if (method === "POST" && url === "/products") {



// // Created Products by post method

//         const body = await parseBody(req);

//          const products = readProduct();

//         // console.log("Body",body);
//         const newProduct = {
//             id : Date.now(),
//             ...body,
//         };
//         // console.log(newProduct);
        
//        products.push(newProduct)
//     //    console.log(products);
       
//     insertProduct(products);

//       sendResponse(res.200,true, " products retrived successfully",products);

//     } else {

//         res.writeHead(404, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: "Route Not Found",
//             })
//         );
//     } else if(method === "PUT" && id !== null){
// const body = await parseBody(req)
// const products = readProduct()

// const index = products.findIndex((p : Iproduct)=>p.id === id)
// // console.log(index);
// if(index < 0){
//        res.writeHead(404, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: " Product NOt FOund",
//                 data: null,
//             })
//         );
// }
//     products[index] = {
//         id: products[index] id, ...body };

// insertProduct(products);



//          res.writeHead(200, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: " Product Updated",
//                 data: products[index],
//             })
//         );

//     } else if(method === "DELETE" && id !==null){
// const products = readProduct()
// const index = products.findIndex((p : Iproduct)=>p.id === id);
// if(index < 0){
//        res.writeHead(404, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: " Product NOt FOund",
//                 data: null,
//             }),
//         );
//    }


// //    const arr = ["1", "2", "3", "4"];
// //    arr.splice(2,1);
// //    console.log(arr);
   


//    products.splice(index,1)
// //    console.log(products);
// insertProduct(products);


//      res.writeHead(200, {
//             "content-type": "application/json",
//         });

//         res.end(
//             JSON.stringify({
//                 message: " Product Deleted",
//                 data: null,
//             })
//         );
   

//     }
// };

// src/controller/productcontroller.ts

import type { IncomingMessage, ServerResponse } from "node:http";
import { insertProduct, readProduct } from "../service/product.service";
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

        // Created Products by post method

        const body = await parseBody(req);

        const products = readProduct();

        // console.log("Body",body);

        const newProduct = {
            id: Date.now(),
            ...body,
        };

        // console.log(newProduct);

        products.push(newProduct);

        // console.log(products);

        insertProduct(products);

        res.writeHead(200, {
            "content-type": "application/json",
        });

        res.end(
            JSON.stringify({
                message: "Alhamdulliah Products Created Sucessfully",
                data: products,
                // data: body,
            })
        );

    } else if (method === "PUT" && id !== null) {

        const body = await parseBody(req);

        const products = readProduct();

        const index = products.findIndex(
            (p: Iproduct) => p.id === id
        );

        // console.log(index);

        if (index < 0) {

            res.writeHead(404, {
                "content-type": "application/json",
            });

            res.end(
                JSON.stringify({
                    message: " Product NOt FOund",
                    data: null,
                })
            );

        } else {

            products[index] = {
                id: products[index].id,
                ...body,
            };

            insertProduct(products);

            res.writeHead(200, {
                "content-type": "application/json",
            });

            res.end(
                JSON.stringify({
                    message: " Product Updated",
                    data: products[index],
                })
            );
        }

    } else if (method === "DELETE" && id !== null) {

        const products = readProduct();

        const index = products.findIndex(
            (p: Iproduct) => p.id === id
        );

        if (index < 0) {

            res.writeHead(404, {
                "content-type": "application/json",
            });

            res.end(
                JSON.stringify({
                    message: " Product NOt FOund",
                    data: null,
                }),
            );

        } else {

            //    const arr = ["1", "2", "3", "4"];
            //    arr.splice(2,1);
            //    console.log(arr);

            products.splice(index, 1);

            // console.log(products);

            insertProduct(products);

            res.writeHead(200, {
                "content-type": "application/json",
            });

            res.end(
                JSON.stringify({
                    message: " Product Deleted",
                    data: null,
                })
            );
        }

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