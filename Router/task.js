import express from "express";
import { AddTask, deleteTask, getTask, setComplet } from "../Controller/task.js";
import verifyToken from "../middleware/verifyToken.js";

const Router = express.Router();
Router.post("/add-task", verifyToken, AddTask).get("/get-task", verifyToken, getTask)
.delete('/task/:id', verifyToken,  deleteTask)
.post("/update/:id",verifyToken, setComplet)
export default Router;
