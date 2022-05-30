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
}
