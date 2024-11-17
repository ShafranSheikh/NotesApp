import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import env from 'dotenv';

const app = express();
app.use(cors());
app.use(bodyParser.json());
env.config();

//Database Connection
const MONGODB = process.env.MONGODB_URI;
mongoose
    .connect(MONGODB)
    .then(()=> console.log("Connected to mongoDB"))
    .catch((error)=> console.error("Error Connecting to the database", error));


app.listen(3000, ()=>{
    console.log("server started on port 3000");
})
