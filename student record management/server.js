const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.static("public"));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentRecord");

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String
});

const Student = mongoose.model("Student", studentSchema);

// Add student
app.post("/add", async (req, res) => {
    let s = new Student(req.body);
    await s.save();
    res.send("Added");
});

// Get students
app.get("/students", async (req, res) => {
    let data = await Student.find();
    res.json(data);
});

app.listen(3000, () => console.log("Server running"));