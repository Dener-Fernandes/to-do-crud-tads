import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";

@Entity()
class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @OneToMany(() => Task, (task) => task.user)
  // tasks: Task[];
}

export { User };
