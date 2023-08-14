const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const connectDB = require("./dbconfig")
const StudentModel = require("./Student")

const port = 8800

app.use(cors());
connectDB();
app.use(bodyParser.json());

// name : String,
//     email : String,
//     number : String,
//     dob : String,
//     address : String,
//     college : String
app.listen(port , () =>
{
    console.log(`server is running on port : ${port}`);
})

////////////////////////////////////////////////////////////////////////////
app.post("/details" , async(req , res) => {
    const data = req.body

      try {
        if (
          !data.name ||
          !data.email ||
          !data.number ||
          !data.dob ||
          !data.address ||
          !data.college
        ) {
          res.send({ success: false, message: "Please Fill The Column" });
        }
        else {
          const userData =
          {
            name: data.name,
            email: data.email.toLowerCase(),
            number: data.number,
            dob: data.dob,
            address: data.address,
            college: data.college
          };
          const newUser = await StudentModel.create(userData);
          res.send({success: true,message: "Your Given Data Successfully Submit",data: newUser,
          });
        }
      } catch (error) {
        res.send({ success: false, message: error.message });
        
      }
      
    });
///////////////////////////////////////////////////////////////////////////////////