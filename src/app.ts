/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/config/middlewares/globalErrorHandler';
import { notFound } from './app/config/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Computer!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
