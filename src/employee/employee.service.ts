import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../company/company.entity';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) {}

  async create(dto: CreateEmployeeDto) {
    await this.ensureCompanyExists(dto.companyId);
    return this.employeeRepository.save(this.employeeRepository.create(dto));
  }

  findAll() {
    return this.employeeRepository.find({ relations: { company: true } });
  }

  async findOne(id: number) {
    const employee = await this.employeeRepository.findOne({ where: { id }, relations: { company: true } });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.findOne(id);
    if (dto.companyId !== undefined) {
      await this.ensureCompanyExists(dto.companyId);
    }
    Object.assign(employee, dto);
    return this.employeeRepository.save(employee);
  }

  async remove(id: number) {
    const employee = await this.findOne(id);
    return this.employeeRepository.remove(employee);
  }

  private async ensureCompanyExists(companyId: number) {
    const company = await this.companyRepository.findOneBy({ id: companyId });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
  }
}
