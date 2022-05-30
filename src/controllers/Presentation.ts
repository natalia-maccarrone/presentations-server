import { Request, Response } from 'express';
import services from '../services';

export interface IPresentationController {
  addPresentation(req: Request, res: Response): Promise<void>;
  addAttendeeToPresentation(req: Request, res: Response): Promise<void>;
}

class PresentationController {
  public async addPresentation(req: Request, res: Response): Promise<void> {
    try {
      const presentation = await services.presentationService.addPresentation(req.body);
      res.send(presentation);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      res.status(500).send('There was an error creating the presentation.');
    }
  }

  public async addAttendeeToPresentation(req: Request, res: Response): Promise<void> {
    try {
      await services.presentationService.addAttendeeToPresentation(
        req.params.presentationId,
        req.params.attendeeId
      );
      res.send('The attendee was added successfully.');
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      res.status(500).send('There was an error adding the attendee.');
    }
  }
}

export default PresentationController;
