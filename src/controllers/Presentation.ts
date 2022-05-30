import { Request, Response } from 'express';
import services from '../services';
import CustomError from '../errors';

export interface IPresentationController {
  addPresentation(req: Request, res: Response): Promise<void>;
  addAttendeeToPresentation(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
}

class PresentationController {
  public async addPresentation(req: Request, res: Response): Promise<void> {
    try {
      const { title, details, room, speaker } = req.body;
      if (!title || !details || !room || !speaker) {
        throw new CustomError('Missing payload data', 400);
      }
      if (typeof room !== 'number') {
        throw new CustomError('Room should be a number', 400);
      }
      const presentation = await services.presentationService.addPresentation(req.body);
      res.send(presentation);
    } catch (error: any) {
      res.status(error.statusCode).send({ Error: error.message });
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

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const presentations = await services.presentationService.getAll();
      res.send(presentations);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      res.status(500).send('There was an error retrieving the presentations.');
    }
  }
}

export default PresentationController;
