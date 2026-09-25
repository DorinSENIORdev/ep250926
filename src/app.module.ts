import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '1433', 10),
      username: process.env.DB_USERNAME || 'sa',
      password: process.env.DB_PASSWORD || 'yourStrong(!)Password',
      database: process.env.DB_NAME || 'epdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    }),
    CompanyModule,
    EmployeeModule
  ]
})
export class AppModule {}
