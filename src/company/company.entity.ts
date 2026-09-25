import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity({ name: 'companies' })
export class Company {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Acme SRL' })
  @Column({ length: 150 })
  name: string;

  @ApiProperty({ example: 'https://acme.example.com' })
  @Column({ length: 255 })
  website: string;

  @ApiProperty({ example: 25 })
  @Column({ type: 'integer' })
  totalEmployees: number;

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];
}
