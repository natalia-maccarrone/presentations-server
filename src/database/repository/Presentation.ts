import { Repository, getRepository } from 'typeorm';
import { Presentation } from '../entity/Presentation';
import { PresentationPayload } from '../../types';

export default class PresentationRepository {
  private repository: Repository<Presentation>;

  constructor() {
    this.repository = getRepository(Presentation);
  }

  async getAll(): Promise<Presentation[]> {
    return await this.repository.find();
  }

  private castPresentationPayload(payload: PresentationPayload) {
    const speaker = JSON.stringify(payload.speaker);
    return { ...payload, speaker, attendees: [] };
  }

  async create(payload: PresentationPayload): Promise<Presentation> {
    const values = this.castPresentationPayload(payload);
    const res = await this.repository
      .createQueryBuilder()
      .insert()
      .into(Presentation)
      .values(values)
      .returning(['id', 'title', 'details', 'room', 'speaker'])
      .execute();
    return res.raw[0];
  }

  async update(presentationId: string, attendeeId: string): Promise<void> {
    const res = await this.repository
      .createQueryBuilder()
      .relation(Presentation, 'attendees')
      .of(presentationId)
      .add(attendeeId);
  }
}
