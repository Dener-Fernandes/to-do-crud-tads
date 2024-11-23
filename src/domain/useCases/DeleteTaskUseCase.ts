import { ITaskRepository } from "../../data/repositories/ITaskRepository";

class DeleteTaskUeCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}

export { DeleteTaskUeCase };
