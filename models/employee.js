const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true,
        enum: ["Software Engineer","Senior Software Engineer", "Lead Engineer","Senior Lead Engineer","Architect",
            "Senior Architect", "PEM" ]
    },
    company:{
        type: String,
        require: true,
        enum: ["Persistent System", "Emprest", "Capgemini"]
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile:{
        type: Number,
        require: true,
        unique: true
    },
    is_fullTime:{
        type: Boolean,
        requie: true
    },
    manager:{
        type: String,
        
    },
    location:{
        type: String,
        require: true
    },
    domain: {
        type: String,
        require: true,
        enum: ["Backend", "Frontend", "Adapter", "Support", "All"]
    },
    project:{
        type: String,
        enum: ["Yum_Dev", "Yum_Support", "YUM"],
        require: true

    }

})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;