import { AttendeePayload } from '../types';
import { Attendee } from '../database/entity/Attendee';
import AttendeeRepository from '../database/repository/Attendee';

export interface AttendeeServiceI {
  addAttendee(payload: AttendeePayload): Promise<Attendee>;
  register(date: Date, attendeeId: string): Promise<void>;
}

class AttendeeService implements AttendeeServiceI {
  public async addAttendee(payload: AttendeePayload): Promise<Attendee> {
    const attendeeRepository = new AttendeeRepository();
    return attendeeRepository.create(payload);
  }

  public async register(date: Date, attendeeId: string): Promise<void> {
    const attendeeRepository = new AttendeeRepository();
    await attendeeRepository.register(date, attendeeId);
  }
}

export default AttendeeService;
