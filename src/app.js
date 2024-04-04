import express from "express";
import dotenv from "dotenv";
import {connection} from "./config/connect.js";
import userRoutes from "./route/route.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/user", userRoutes);
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Hello1");
  res.send("Hello World");
});

connection();

app.listen(PORT, () => {
  console.log(`server is started on ${PORT}`);
});
