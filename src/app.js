import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";

import { errorHandle } from "./errors/errHandle.js";
import { logger } from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(`mongodb+srv://carlaguirin07:Carla0761592@cluster0.tzrap35.mongodb.net/adoptions?retryWrites=true&w=majority&appName=Cluster0`);

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

// Middleware de manejo de errores
app.use(errorHandle);

app.listen(PORT, () => logger.info(`Listening on ${PORT}`));
