import { ITask } from "../../domain/interfaces/ITask";

interface ITaskRepository {
  create(task: ITask): Promise<ITask>;
  findById(id: number, userEmail: string): Promise<ITask | null>;
  listAll(userEmail: string): Promise<ITask[] | null>;
  update(task: ITask): Promise<ITask>;
  delete(id: number, userEmail: string): Promise<void>;
}

export { ITaskRepository };
