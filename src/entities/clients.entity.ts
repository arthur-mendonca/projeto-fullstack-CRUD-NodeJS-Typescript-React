import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("clients")
export class Client {
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

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}
