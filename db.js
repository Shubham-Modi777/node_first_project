const mongoose = require('mongoose');
require("dotenv").config();


//Define MongoDB connection URL
//const mongoUrl = process.env.MONGODB_LOCAL_URL//for local setup
const mongoUrl = process.env.MONGODB_URL // for cloud setup

//Setup MongoDB connection
mongoose.connect(mongoUrl)

//get the default connection
const db = mongoose.connection;

//define event listeners for database connection
db.on('connected', ()=>{
    console.log('Connected to MongoDB server!');
})

db.on('error', (err)=>{
    console.log('error', err);
})

db.on('disconnected', ()=>{
    console.log('Disconnected from MongoDB server');
})

module.exports = db;