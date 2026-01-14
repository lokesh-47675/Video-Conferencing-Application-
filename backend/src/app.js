import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({path: '../.env'});

console.log(process.env.MONGODB_URL);



import cors from "cors";

import {connectToSocket} from "./controller/socketManager.js";

import { createServer } from 'node:http';


import userRoute from "./routes/users.routes.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port" ,(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"500kb"}));
app.use(express.urlencoded({limit:"500kb",extended:true}));

const dbUrl = process.env.MONGODB_URL;

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}



import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { dot } from "node:test/reporters";


const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/chat', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.use("/users",userRoute);

app.get("/",(req,res) => {
    res.send("Hello , Stay Consistent");
});


server.listen(app.get("port"),()=>{
    console.log("Connection is established with 8000");
})