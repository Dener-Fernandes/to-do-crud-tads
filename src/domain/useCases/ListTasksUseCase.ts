import { ITaskRepository } from "../../data/repositories/ITaskRepository";
import { ITask } from "../interfaces/ITask";

class ListTasksUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(): Promise<ITask[] | []> {
    const tasks = await this.taskRepository.listAll();

    if (!tasks) return [];

    return tasks;
  }
}

export { ListTasksUseCase };
