import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'dev_journal',
  entities: ['src/entities/**/*.{ts,js}'],
  migrations: ['database/migrations/**/*.{ts,js}'],
  logging: true,
  synchronize: true,

});



