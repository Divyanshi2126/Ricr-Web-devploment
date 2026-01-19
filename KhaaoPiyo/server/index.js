import dotenv from'dotenv';
dotenv.config();


import connectDB from "./src/config/db.js";
import cors from "cors";
import morgan from 'morgan';
import express from "express";
import AuthRouter from'./src/routers/authRouter.js';

const app = express();

app.use(cors({origin: "http://localhost:5173",credentials:true}));
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth",AuthRouter);

app.get("/",(res,req)=>{
    console.log("server is working")
});

app.use((err,req,res,next)=>{
    const ErrorMessage = err.message || "internal server error";
    const StatusCode = err.statusCode || 500;

    console.log("Error found ",{ErrorMessage,StatusCode});

    res.status(StatusCode).json({message: ErrorMessage});
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log ("server started at port:",port);
    connectDB();
});