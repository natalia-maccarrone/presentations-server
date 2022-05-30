import { Repository, getRepository } from 'typeorm';
import { Attendee } from '../entity/Attendee';
import { AttendeePayload } from '../../types';

export default class AttendeeRepository {
  private repository: Repository<Attendee>;

  constructor() {
    this.repository = getRepository(Attendee);
  }

  async getAll(): Promise<Attendee[]> {
    return await this.repository.find();
  }

  async create(payload: AttendeePayload): Promise<Attendee> {
    const res = await this.repository
      .createQueryBuilder()
      .insert()
      .into(Attendee)
      .values(payload)
      .execute();
    return res.raw[0];
  }

  async register(date: Date, attendeeId: string): Promise<void> {
    console.log(date);
    await this.repository
      .createQueryBuilder()
      .update(Attendee)
      .set({ registeredAt: date })
      .where('id = :id', { id: attendeeId })
      .execute();
  }
}
