import 'dotenv/config';
import Express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';
import AppDataSource from './data-source';

const app = Express();


app.use(cors());
app.use(Express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use('/', router);

async function bootstrap() {
  try {
    await AppDataSource.initialize();
    app.listen(process.env.PORT, () =>
      console.log(`Server start! Address: http://localhost:${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
