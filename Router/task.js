import express from "express";
import { AddTask, deleteTask, getTask } from "../Controller/task.js";

const Router = express.Router();
Router.post("/add-task", AddTask).get("/get-task", getTask)
.delete('/task/:id', deleteTask)
export default Router;
