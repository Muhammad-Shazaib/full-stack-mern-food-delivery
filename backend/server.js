import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { connectDB } from "./config/db.js";
import dns from "dns";
import foodRouter from "./routes/FoodRoutes.js";
import userRouter from "./routes/UserRoutes.js";

dns.setServers(["8.8.8.8", "0.0.0.0"]);

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use('/api/user', userRouter)

app.get("/", (req, res) => {
  res.send("ALLAH HO AKBAR!");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
