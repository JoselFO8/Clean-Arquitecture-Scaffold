import 'module-alias/register'

import helmet from 'helmet';
import { connect } from 'mongoose';
import { StartProjectInit } from "@tsclean/core";

import { AppContainer } from "@/application/app";
import {MONGODB_URI, PORT} from "@/application/config/environment";

import cors from "cors"
import bodyParser from 'body-parser';



// function initConnect(uri: string): Promise<void> {
function initConnect(uri: string): any {
    connect(uri)
        .then(() => console.log('DB Mongo connected'))
        .catch((err) => console.log(err));
}

async function run(): Promise<void> {
   const app = await StartProjectInit.create(AppContainer);
   await initConnect(MONGODB_URI);
   app.use(bodyParser.json({limit: "20mb"}))
   app.use(bodyParser.urlencoded({limit: "20mb", extended: true}))
   app.use(helmet());
   app.use(cors())
   await app.listen(PORT, () => console.log('Running on port: ' + PORT))
}

void run().catch((err) => console.log(err));
