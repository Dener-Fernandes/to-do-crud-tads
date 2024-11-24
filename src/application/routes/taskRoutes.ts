import express from "express";
import { TaskController } from "../controllers/TaskController";

const taskRoutes = express.Router();

const taskController = new TaskController();

taskRoutes.post("/", taskController.createTask);
taskRoutes.put("/:id", taskController.updateTask);
taskRoutes.get("/", taskController.findTask);
taskRoutes.get("/listTasks", taskController.listTasks);
taskRoutes.delete("/:id", taskController.deleteTask);

export { taskRoutes };
