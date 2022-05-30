import { Request, Response } from 'express';
import services from '../services';
import CustomError from '../errors';

export interface IAttendeeController {
  addAttendee(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
}

class AttendeeController {
  public async addAttendee(req: Request, res: Response): Promise<void> {
    try {
      const { name, company, email } = req.body;
      if (!name || !company || !email) {
        throw new CustomError('Missing payload data', 400);
      }
      const attendee = await services.attendeeService.addAttendee(req.body);
      res.send(attendee);
    } catch (error: any) {
      res.status(error.statusCode).send({ Error: error.message });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const attendees = await services.attendeeService.getAll();
      res.send(attendees);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      res.status(500).send('There was an error retrieving the attendees.');
    }
  }
}

export default AttendeeController;
