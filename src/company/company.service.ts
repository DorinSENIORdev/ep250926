import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly repository: Repository<Company>
  ) {}

  create(dto: CreateCompanyDto) {
    return this.repository.save(this.repository.create(dto));
  }

  findAll() {
    return this.repository.find({ relations: { employees: true } });
  }

  async findOne(id: number) {
    const company = await this.repository.findOne({ where: { id }, relations: { employees: true } });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }

  async update(id: number, dto: UpdateCompanyDto) {
    const company = await this.findOne(id);
    Object.assign(company, dto);
    return this.repository.save(company);
  }

  async remove(id: number) {
    const company = await this.findOne(id);
    return this.repository.remove(company);
  }
}
