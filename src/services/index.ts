import PresentationService from '../services/Presentation';
import AttendeeService from './Attendee';

const presentationService = new PresentationService();
const attendeeService = new AttendeeService();

export default {
  presentationService,
  attendeeService,
};
