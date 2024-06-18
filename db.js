const mongoose = require('mongoose');

c//Define MongoDB connection URL
const mongoUrl = "mongodb://localhost:27017"

//Setup MongoDB connection
mongoose.connect(mongoUrl)

//get the default connection
const db = mongoose.connection;

//define event listeners for database connection
db.on('connected', ()=>{
    console.log('connected to db');
})

db.on('error', (err)=>{
    console.log('error', err);
})

db.on('disconnected', ()=>{
    console.log('disconnected from db');
})

module.exports = db;