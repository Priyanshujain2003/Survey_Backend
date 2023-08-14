const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name : String,
    email : String,
    number : String,
    dob : String,
    address : String,
    college : String
})

const StudentModel = new mongoose.model("students" , StudentSchema)

module.exports = StudentModel;