// // // import dotenv from "dotenv"
// // // import path from "node:path"

// // // dotenv.config({path : path.resolve(process.cwd(), '.env')});

// // // const config = {
// // //     port : Number(process.env.PORT),
// // // }

// // // export default config;

// // // config.ts
// // import dotenv from "dotenv";
// // import path from "node:path";

// // dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// // const config = {
// //     // Adding a fallback value is a good safety measure
// //     port: Number(process.env.PORT) || 3000, 
// // };

// // export default config;


// // src/config/index.ts

// import dotenv from "dotenv";
// import path from "node:path";

// dotenv.config({
//     path: path.resolve(process.cwd(), ".env"),
// });

// const config = {
//     port: Number(process.env.PORT) || 8000,
// };

// export default config;

import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env"),
});

const config = {
    port: Number(process.env.PORT) || 9000,
};

export default config;