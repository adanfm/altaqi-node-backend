import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import mongoose from "mongoose";
import InitialSyncCommand from "./commands/InitialSyncCommand";
import bodyParser from "body-parser";
import SyncApiCommand from "./commands/SyncApiCommand";
import cron from "node-cron";
class App {
    constructor() {
        dotenv.config();
        this.server = express();
        this.middlewares();
        this.server.use(routes);

        mongoose.connect(process.env.CLUSTER_OF_CONNECT_MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.commands();
    }

    middlewares() {
        this.server.use(bodyParser.urlencoded({ extended: false }));
        this.server.use(bodyParser.json());
    }

    commands() {
        InitialSyncCommand();

        /*
            # ┌────────────── second (optional)
            # │ ┌──────────── minute
            # │ │ ┌────────── hour
            # │ │ │ ┌──────── day of month
            # │ │ │ │ ┌────── month
            # │ │ │ │ │ ┌──── day of week
            # │ │ │ │ │ │
            # │ │ │ │ │ │
            # * * * * * *
        */
        cron.schedule("0 0 9 * * *", SyncApiCommand);
    }
}

export default new App().server;
