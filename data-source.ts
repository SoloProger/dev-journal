import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });