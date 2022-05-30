import { Router } from 'express';
import { IPresentationController } from '../controllers/Presentation';

const router = Router();

export default (app: Router, presentationController: IPresentationController): void => {
  app.use('/presentation', router);

  router.post('/', presentationController.addPresentation);
  router.post(
    '/:presentationId/attendees/:attendeeId',
    presentationController.addAttendeeToPresentation
  );
};
