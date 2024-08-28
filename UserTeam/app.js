import express from "express";
import cors from 'cors';

import userRouter from "./modules/user/routes.js";
import teamRouter from "./modules/team/routes.js";

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies


app.use('/api/user', userRouter); // Routes for user-related API
app.use('/api/team', teamRouter);

export default app;
