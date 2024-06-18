const express = require('express');
const db = require('./db');

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//exporting model
const Employee = require('./models/employee');

const app = express();
app.use(express.json()); // to Parses the text as JSON and exposes the resulting object on req.body
app.get('/', (req, res)=>{
    res.send("Welcome to Yum Team...!")
})

app.post('/employee', async (req, res)=>{
    try {
        let reqData = req.body;
        console.log("reqData", reqData);
        let newEmployee = Employee(reqData);
        let resp = await newEmployee.save();
        console.log("Data added successfully!", resp)
        res.status(200).json(resp)  
    } catch (error) {
        console.log("inside catch", error);
        res.status(500).json({error: "Internal server error"})
    }
})

app.get('/employee', async (req, res)=>{
    try {
        let data = await Employee.find();
        console.log("fetched data", data);
        res.status(200).json(data);
    } catch (error) {
        console.log("inside catch", error);
        res.status(500).json({error: "Internal server error"})
    }
})

app.get('/employee/:domain', async (req, res)=>{
    try {
        let domain = req.params.domain;
        if(domain == "Backend"|| domain == "Frontend"|| domain == "Adapter"|| domain == "Support"){
            let data = await Employee.find({domain: domain})
            res.status(200).json(data)
        }
        else{
            res.status(404).json({error: "domain not found"})        
        }    
    } 
    catch (error) {
        console.log("inside catch", error);
        res.status(500).json({error: "Internal server error"})
    }
})

app.put('/employee/:id', async (req, res)=>{
    try {
        let personId = req.params.id;
        let newUpdatedData = req.body;
        let resp = await Employee.findByIdAndUpdate(personId, newUpdatedData, {
            new: true,  //to return the updated document
            runValidators: true  // run mongoose validation
        })
        if(resp){
            console.log("data updated successfully");
            res.status(200).json(resp)
        }
        else{
            console.log("Update: Id not found");
            res.status(404).json({error : "Person Id not found"})
        }
        
        
    } catch (error) {
        console.log("inside catch", error);
        res.status(500).json({error: "Internal server error"})
    }
})


app.listen(PORT, ()=>{
    console.log("Listening to port 3000")
})