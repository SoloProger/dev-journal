import 'dotenv/config';
import Express from 'express';

const app = Express();

async function bootstrap() {
  try {
    app.listen(process.env.PORT, () => console.log(`Server start! Address: http://localhost:${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
}

bootstrap();