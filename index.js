import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./Db/index.js";
import AuthRoute from "./Router/auth.js";
import TaskRoute from "./Router/task.js";
dotenv.config(); 
const app = express();
connection();
app.use(express.json());
app.use(cors());

app.use("/api/user", AuthRoute, TaskRoute);
app.listen(process.env.PORT, () => {
  console.log(`server running on port 8080 `); 
});
