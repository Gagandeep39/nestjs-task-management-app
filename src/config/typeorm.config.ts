import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gagan',
  password: '123456',
  database: 'taskmanagement',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Any file with .entity.ts extension
};
