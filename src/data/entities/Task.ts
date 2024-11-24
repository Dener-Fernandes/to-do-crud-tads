import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Task {
  @PrimaryGeneratedColumn({ name: "task_id" })
  taskId!: number;

  @Column({ type: "text", nullable: false })
  description!: string;
}

export { Task };
