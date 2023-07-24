import { join } from 'path';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'dev_journal',
  entities: [join(__dirname, '/database/entities/**/*{.ts,.js}')],
  migrations: [join(__dirname, '/database/migrations/**/*{.ts,.js}')],
  logging: true,
  synchronize: true,
});
