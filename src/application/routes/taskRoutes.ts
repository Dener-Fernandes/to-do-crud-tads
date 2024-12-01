import express from "express";
import { TaskController } from "../controllers/TaskController";
import { decryptTokenMiddleware } from "../middlewares/decryptTokenMiddleware";

const taskRoutes = express.Router();

const taskController = new TaskController();

taskRoutes.post("/", decryptTokenMiddleware, taskController.createTask);
taskRoutes.put("/:id", decryptTokenMiddleware, taskController.updateTask);
taskRoutes.get("/", decryptTokenMiddleware, taskController.findTask);
taskRoutes.get("/listTasks", decryptTokenMiddleware, taskController.listTasks);
taskRoutes.delete("/:id", decryptTokenMiddleware, taskController.deleteTask);

export { taskRoutes };
