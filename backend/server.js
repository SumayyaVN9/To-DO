import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import cors from "cors";

dotenv.config();        // Load environment variables (.env)
const app = express();        // Create your web server

app.use(cors());            // Allow frontend to connect
app.use(express.json());      // Allow JSON data in requests
  

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongodb is Connected"))
.catch(err => console.error("MongoDb error:",err));
const PORT = process.env.PORT || 5000;


app.listen(PORT, () =>  console.log(`🚀 Server running on port ${process.env.PORT}`));
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.error("❌ MongoDB Error:", err));

// const taskSchema = new mongoose.Schema({
//   title: String,
//   status: { type: String, default: "pending" }
// });

// const Task = mongoose.model("Task", taskSchema);

// // Get all tasks
// app.get("/tasks", async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// });

// // Add new task
// app.post("/tasks", async (req, res) => {
//   const newTask = new Task(req.body);
//   await newTask.save();
//   res.json(newTask);
// });

// // Update task status
// app.put("/tasks/:id", async (req, res) => {
//   const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// // Delete task
// app.delete("/tasks/:id", async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// });

// app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
