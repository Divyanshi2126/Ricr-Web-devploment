import dotenv from'dotenv';
dotenv.config();


import connectDB from "./src/config/db.js";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors({origin: "https://localhost:5173"}));

app.use(express.json());

// app.use("/auth",AuthRouter);

app.get("/",(res,req)=>{
    console.log("server is working")
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log ("server started at port:",port);
    connectDB();
});