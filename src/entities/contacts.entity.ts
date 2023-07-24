import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Client } from "./clients.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}
