import { ITaskRepository } from "../../data/repositories/ITaskRepository";
import { ITask } from "../interfaces/ITask";

class UpdateTaskUeCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(task: ITask): Promise<ITask> {
    return await this.taskRepository.update(task);
  }
}

export { UpdateTaskUeCase };
