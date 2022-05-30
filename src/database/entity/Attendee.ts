import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Presentation } from './Presentation';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  company!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  registeredAt?: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @JoinColumn()
  presentations!: Presentation[];
}
