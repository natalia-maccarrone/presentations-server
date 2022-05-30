import { Presentation } from '../database/entity/Presentation';
import { PresentationPayload } from '../types';
import PresentationRepository from '../database/repository/Presentation';
import AttendeeRepository from '../database/repository/Attendee';

export interface PresentationServiceI {
  addPresentation(newPresentation: PresentationPayload): Promise<Presentation>;
}

class PresentationService implements PresentationServiceI {
  public async addPresentation(payload: PresentationPayload): Promise<Presentation> {
    const presentationRepository = new PresentationRepository();
    return presentationRepository.create(payload);
  }

  public async addAttendeeToPresentation(
    presentationId: string,
    attendeeId: string
  ): Promise<void> {
    const presentationRepository = new PresentationRepository();
    const attendeeRepository = new AttendeeRepository();
    await presentationRepository.update(presentationId, attendeeId);
    await attendeeRepository.register(new Date(), attendeeId);
  }
}

export default PresentationService;
