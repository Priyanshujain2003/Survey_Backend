const mongoose = require("mongoose")

const connectDB = async () => {
    mongoose.connect("mongodb+srv://hellopriyanshu2003:swIfMMFM1kWqAamf@cluster0.egopui7.mongodb.net/student?retryWrites=true&w=majority").then(() => {
        console.log("connected to database");
    }).catch((err) => {
        console.log("err", err);
    })
}

module.exports = connectDB