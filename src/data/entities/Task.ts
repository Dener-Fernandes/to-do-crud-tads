import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
class Task {
  @PrimaryGeneratedColumn({ name: "task_id" })
  taskId: number;

  @Column({ type: "text", nullable: false })
  description: string;

  // @ManyToOne(() => User, (user) => user.tasks, { onDelete: "CASCADE" })
  // @JoinColumn({ name: "user_id" })
  // user: User;
}

export { Task };
