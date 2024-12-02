import { ITaskRepository } from "../../data/repositories/ITaskRepository";
import { ITask } from "../interfaces/ITask";

class FindTaskUeCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: number, userEmail: string): Promise<ITask | null> {
    return await this.taskRepository.findById(id, userEmail);
  }
}

export { FindTaskUeCase };
