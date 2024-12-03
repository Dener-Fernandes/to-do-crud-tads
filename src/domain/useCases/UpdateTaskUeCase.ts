import { ITaskRepository } from "../../data/repositories/ITaskRepository";
import { ITask } from "../interfaces/ITask";

class UpdateTaskUeCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(task: ITask): Promise<ITask> {
    await this.taskRepository.update(task);

    return task;
  }
}

export { UpdateTaskUeCase };
