import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { get } from 'config';

const dbConfig: any = get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: dbConfig.synchronize,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Any file with .entity.ts extension
};
