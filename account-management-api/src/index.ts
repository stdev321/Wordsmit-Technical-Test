import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import accountRouter from './routes/accountRouter'

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

// Routes
app.use('/accounts', accountRouter);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));