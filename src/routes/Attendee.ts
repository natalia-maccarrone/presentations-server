import { Router } from 'express';
import { IAttendeeController } from '../controllers/Attendee';

const router = Router();

export default (app: Router, attendeeController: IAttendeeController): void => {
  app.use('/attendees', router);

  router.post('/', attendeeController.addAttendee);
};
