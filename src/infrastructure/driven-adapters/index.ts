// import { AppContainer } from "@/application/app";
// import { MONGODB_URI, PORT } from "@/application/config/environment";
// import { StartProjectInit } from "@tsclean/core";
// import helmet from "helmet";
// import { connect } from "http2";


// async function run(): Promise<void> {
//     await connect(MONGODB_URI);
//     console.log("Mongo_DB is conected!");
//     // StartProyectServer ya no existe
//     const app = await StartProjectInit.create(AppContainer);
//     app.use(helmet());
//     await app.listen(PORT, () => {
//         console.log("API corriendo en puerto: " + PORT);
//     })
// }

// run();