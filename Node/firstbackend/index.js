import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/MyRouter.js"

const app = express();

app.use(express.json());

app.use("/auth",AuthRouter);


app.get("/", (req, res) => {
  console.log("server is running");
  res.json({ message: "servere is running Sucessefully" });
});

app.use((err,req,res,next) =>{
  const errormessage =err.message || "internal server error";
  const statuscode =err.statuscode || 500;

  res.status(statuscode).json({message: errormessage});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started at port ", port);
  connectDB();
});
