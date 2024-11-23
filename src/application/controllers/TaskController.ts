import { Request, Response } from "express";
import { ITask as ITaskDto } from "../../domain/interfaces/ITask";
import { TaskRepository } from "../../data/repositories/implementations/TaskRepository";
import { Task } from "../../data/entities/Task";
import { dataSource } from "../../data/config/dataSource";
import { CreateTaskUseCase } from "../../domain/useCases/CreateTaskUseCase";
import { FindTaskUeCase } from "../../domain/useCases/FindTaskUseCase";
import { UpdateTaskUeCase } from "../../domain/useCases/UpdateTaskUeCase";
import { DeleteTaskUeCase } from "../../domain/useCases/DeleteTaskUseCase";

class TaskController {
  async createTask(request: Request, response: Response) {
    const { description }: ITaskDto = request.body;

    const taskRepository = new TaskRepository(dataSource.getRepository(Task));

    const createTaskUseCase = new CreateTaskUseCase(taskRepository);

    const task = await createTaskUseCase.execute({ description });

    response.status(201).json(task);
  }

  async findTask(request: Request, response: Response) {
    const { id } = request.query;

    const taskRepository = new TaskRepository(dataSource.getRepository(Task));

    const findTaskUseCase = new FindTaskUeCase(taskRepository);

    const task = await findTaskUseCase.execute(Number(id));

    response.status(200).json(task);
  }

  async updateTask(request: Request, response: Response) {
    const { id } = request.params;
    const { description }: ITaskDto = request.body;

    const taskRepository = new TaskRepository(dataSource.getRepository(Task));

    const updateTaskUseCase = new UpdateTaskUeCase(taskRepository);

    const task = await updateTaskUseCase.execute({
      taskId: Number(id),
      description,
    });

    response.status(200).json(task);
  }

  async deleteTask(request: Request, response: Response) {
    const { id } = request.params;

    const taskRepository = new TaskRepository(dataSource.getRepository(Task));

    const deleteTaskUseCase = new DeleteTaskUeCase(taskRepository);

    await deleteTaskUseCase.execute(Number(id));

    response.status(204).send();
  }
}

export { TaskController };
