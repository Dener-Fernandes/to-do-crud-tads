import { ITaskRepository } from "../../data/repositories/ITaskRepository";

class DeleteTaskUeCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: number, userEmail: string): Promise<void> {
    await this.taskRepository.delete(id, userEmail);
  }
}

export { DeleteTaskUeCase };
