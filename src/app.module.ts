import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER || 'epuser',
      password: process.env.DB_PASS || 'epsecret',
      database: process.env.DB_NAME || 'epdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    CompanyModule,
    EmployeeModule
  ]
})
export class AppModule {}
