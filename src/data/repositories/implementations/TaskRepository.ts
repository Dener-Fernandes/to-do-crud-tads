import { Repository } from "typeorm";
import { ITask } from "../../../domain/interfaces/ITask";
import { ITaskRepository } from "../ITaskRepository";
import { Task } from "../../entities/Task";

class TaskRepository implements ITaskRepository {
  constructor(private taskRepository: Repository<Task>) {}

  async create(task: ITask): Promise<ITask> {
    return await this.taskRepository.save(task);
  }

  async findById(id: number): Promise<ITask | null> {
    const task = await this.taskRepository.findOne({
      where: {
        taskId: id,
      },
    });

    if (!task) return null;

    return task;
  }

  async update(task: ITask): Promise<ITask> {
    await this.taskRepository.save(task);

    return task;
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete({ taskId: id });
  }
}

export { TaskRepository };
