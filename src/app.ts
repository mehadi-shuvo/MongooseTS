import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { studentRoutes } from './modules/student/student.router';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/student', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Computer!');
});

export default app;
