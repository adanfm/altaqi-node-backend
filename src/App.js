import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import mongoose from "mongoose";
import InitialScriptData from "./commands/InitialScriptData";

class App {
    constructor() {
        dotenv.config();
        this.server = express();
        this.server.use(routes);

        mongoose.connect(process.env.CLUSTER_OF_CONNECT_MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        InitialScriptData();
    }

    middlewares() {
        this.server.use(express.json());
    }
}

export default new App().server;
