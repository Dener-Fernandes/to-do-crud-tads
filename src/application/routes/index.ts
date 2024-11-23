import express from "express";
import { taskRoutes } from "./taskRoutes";

const routes = express.Router();

routes.use("/tasks", taskRoutes);

export { routes };
