import { Router } from 'express';
import controllers from '../controllers';
import Attendee from './Attendee';
import Presentation from './Presentation';

export default (): Router => {
  const router = Router();

  Attendee(router, controllers.attendeeController);
  Presentation(router, controllers.presentationController);

  return router;
};
