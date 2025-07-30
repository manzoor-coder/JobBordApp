import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/index.js";
import jobRoutes from './src/routes/job.Routes.js'

const PORT = process.env.PORT || 8000

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use('/jobs', jobRoutes);

app.listen(PORT, () =>{
    console.log(`Server is listening at port ${PORT}`)
})