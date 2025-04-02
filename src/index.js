// import mongoose, { connect } from 'mongoose';
// import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';
dotenv.config({
    path: './env'
});






connectDB();

















// this is used to attach the mongoodb uri 
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';

// import express from 'express';
// const app = express();

// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI,}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error connecting to database",error);
//             throw error;
//         })

//         app.listen( process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//         console.log("Connected to database successfully");



//     }catch (error) {
//         console.error("ERROR",error);
//     }
// })()