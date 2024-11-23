import { ITaskRepository } from "../../data/repositories/ITaskRepository";
import { ITask } from "../interfaces/ITask";

class FindTaskUeCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: number): Promise<ITask> {
    return await this.taskRepository.findById(id);
  }
}

export { FindTaskUeCase };
