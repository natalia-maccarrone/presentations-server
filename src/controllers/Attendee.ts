import { Request, Response } from 'express';
import services from '../services';

export interface IAttendeeController {
  addAttendee(req: Request, res: Response): Promise<void>;
}

class AttendeeController {
  public async addAttendee(req: Request, res: Response): Promise<void> {
    try {
      const attendee = await services.attendeeService.addAttendee(req.body.attendee);
      res.send(attendee);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      res.status(500).send('There was an error creating the attendee.');
    }
  }
}

export default AttendeeController;
