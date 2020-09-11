const mongoose = require('mongoose');

const addEmployee = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    skills: String,
    rate: Number,
    city: String,
    State: String,
    zip: Number
})

module.exports = mongoose.model('AddEmployee', addEmployee)