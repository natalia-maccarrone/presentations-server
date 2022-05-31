import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  private setAppConfigs(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private async setRoutes(): Promise<void> {
    this.app.use('/su-casa/api/v1', await require('./routes').default());
  }

  public async start(port: number): Promise<void> {
    try {
      await await createConnection();
      console.log(`✨ Database connected`);

      this.setAppConfigs();

      await this.setRoutes();

      this.app
        .listen(port, () => {
          console.log(`✨ Listening on port: ${port}`);
          console.log(`✨ Environment: ${process.env.NODE_ENV}`);
        })
        .on('error', (err) => {
          console.log(err);
          process.exit(1);
        });
    } catch (err: any) {
      console.log(`Cannot start server: ${err.message}`);
    }
  }
}
