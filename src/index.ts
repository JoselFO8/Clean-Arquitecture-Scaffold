import 'module-alias/register'

import helmet from 'helmet';
import { connect } from 'mongoose';
import { StartProjectInit } from "@tsclean/core";

import { AppContainer } from "@/application/app";
import {MONGODB_URI, PORT} from "@/application/config/environment";

async function initConnect(uri: string): Promise<void> {
    await connect(uri)
        .then(() => console.log('DB Mongo connected: ' + uri))
        .catch((err) => console.log(err));
}

async function run(): Promise<void> {
   const app = await StartProjectInit.create(AppContainer);
   await initConnect(MONGODB_URI);
   app.use(helmet());
   await app.listen(PORT, () => console.log('Running on port: ' + PORT))
}

void run().catch((err) => console.log(err));
