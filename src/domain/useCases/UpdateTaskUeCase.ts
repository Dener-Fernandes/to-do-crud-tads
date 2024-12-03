import { ITaskRepository } from "../../data/repositories/ITaskRepository";
import { ITask } from "../interfaces/ITask";

class UpdateTaskUeCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(task: ITask): Promise<ITask | null> {
    const isTaskFound = await this.taskRepository.findById(
      task.taskId!,
      task.userEmail,
    );

    if (!isTaskFound) return null;

    await this.taskRepository.update(task);

    return task;
  }
}

export { UpdateTaskUeCase };
