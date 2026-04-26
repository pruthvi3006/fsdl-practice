const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static("public"));

//mongodb
mongoose.connect("mongodb://127.0.0.1:27017/StudentData")
.then(()=> console.log("MongoDb Connected"))
.catch(err=>console.log(err));

//schema
const schema=new mongoose.Schema({
    name:String,
    email:String,
    event:String
});

const Participant=mongoose.model("Participant",schema);

app.post("/register",async(req,res)=>{
    try{
        let data=new Participant(req.body);
        await data.save();
        res.send("Registered Successfully");
    }catch(err){
        res.send(err);
    }
});

app.listen(3000,()=>{
    console.log("Server listening to port 3000");
});