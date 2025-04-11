require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
// import routes from "./routes";
// import { connectDB } from "./models";
// import limiter from "./middlewares/rateLimit";
// import config from "./config/config";
import cookieParser from "cookie-parser";

const PORT = 7200
const app = express();

if (!PORT) {
    throw new Error(`Error: No port value specified...`);
}

const startServer = async () => {
    try {
        app.use(express.json());
        app.use(cookieParser());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors());
        app.use(helmet());
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error: any) {
        console.error('Failed to start the server:', error);
        process.exit(1);
    }
};

startServer();

process.on('uncaughtException', (err: Error) => {
    console.error(`Uncaught Exception: ${err.message}`);
    process.exit(1);
});

process.on('unhandledRejection', (reason: any) => {
    console.error(`Unhandled Rejection: ${reason}`);
    process.exit(1);
});