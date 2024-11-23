import { ITaskRepository } from "../../data/repositories/ITaskRepository";
import { ITask } from "../interfaces/ITask";

class CreateTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(task: ITask): Promise<ITask> {
    return await this.taskRepository.create(task);
  }
}

export { CreateTaskUseCase };
