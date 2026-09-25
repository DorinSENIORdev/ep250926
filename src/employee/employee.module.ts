import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../company/company.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Company])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
