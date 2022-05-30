import { AttendeePayload } from '../types';
import { Attendee } from '../database/entity/Attendee';
import AttendeeRepository from '../database/repository/Attendee';

export interface AttendeeServiceI {
  addAttendee(payload: AttendeePayload): Promise<Attendee>;
}

class AttendeeService implements AttendeeServiceI {
  public async addAttendee(payload: AttendeePayload): Promise<Attendee> {
    const attendeeRepository = new AttendeeRepository();
    return attendeeRepository.create(payload);
  }
}

export default AttendeeService;
