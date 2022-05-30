import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Attendee } from './Attendee';

@Entity()
export class Presentation {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  details!: string;

  @Column()
  room!: number;

  @Column()
  speaker!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToMany(() => Attendee, (attendee) => attendee.presentations, { cascade: true })
  @JoinTable()
  attendees!: Attendee[];
}
