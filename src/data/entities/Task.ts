import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Task {
  @PrimaryGeneratedColumn({ name: "task_id" })
  taskId!: number;

  @Column({ type: "text", nullable: false })
  description!: string;

  @Column({ name: "user_email", type: "varchar", nullable: false })
  userEmail!: string;
}

export { Task };
