const mongoose = require('mongoose');

const mongoDbUrl = 'mongodb://localhost:27017';

mongoose.connect(mongoDbUrl)

const db = mongoose.connection;

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