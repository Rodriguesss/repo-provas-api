import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { routes } from './routers/index.routes';
import { errorHandler } from './middlewares/errorHandle.middleware';

const app = express();

app.use(json());
app.use(cors());
app.use('/api', routes);
app.use(errorHandler);

export { app };