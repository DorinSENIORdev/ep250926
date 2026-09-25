import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../company/company.entity';

@Entity({ name: 'employees' })
export class Employee {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '2001001234567' })
  @Column({ length: 13 })
  idnp: string;

  @ApiProperty({ example: 'Ion Popescu' })
  @Column({ length: 150 })
  name: string;

  @ApiProperty({ example: 12500.5, type: Number })
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  salary: number;

  @ApiProperty({ example: 1 })
  @Column()
  companyId: number;

  @ManyToOne(() => Company, (company) => company.employees, { onDelete: 'NO ACTION' })
  @JoinColumn({ name: 'companyId' })
  company: Company;
}
