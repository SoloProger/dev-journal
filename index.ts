import 'dotenv/config';
import Express from 'express';
import apiRouter from './routes/api';
import AppDataSource from './data-source';


const app = Express();

app.use('/api', apiRouter);


async function bootstrap() {
  try {
    await AppDataSource.initialize();
    app.listen(process.env.PORT, () => console.log(`Server start! Address: http://localhost:${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
}

bootstrap();