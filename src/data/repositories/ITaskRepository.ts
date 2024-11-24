import { ITask } from "../../domain/interfaces/ITask";

interface ITaskRepository {
  create(task: ITask): Promise<ITask>;
  findById(id: number): Promise<ITask | null>;
  listAll(): Promise<ITask[] | null>;
  update(task: ITask): Promise<ITask>;
  delete(id: number): Promise<void>;
}

export { ITaskRepository };
