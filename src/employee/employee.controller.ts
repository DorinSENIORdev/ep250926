import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('children (employees)')
@Controller('children')
export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Creeaza un angajat' })
  @ApiBody({ type: CreateEmployeeDto })
  @ApiResponse({ status: 201, description: 'Angajatul a fost creat.' })
  @ApiResponse({ status: 404, description: 'Compania nu exista.' })
  create(@Body() dto: CreateEmployeeDto) { return this.service.create(dto); }

  @Get()
  @ApiOperation({ summary: 'Afiseaza toti angajatii' })
  @ApiResponse({ status: 200, description: 'Lista angajatilor.' })
  findAll() { return this.service.findAll(); }

  @Get(':id')
  @ApiOperation({ summary: 'Afiseaza un angajat dupa ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Angajatul solicitat.' })
  @ApiResponse({ status: 404, description: 'Angajatul nu exista.' })
  findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Put(':id')
  @ApiOperation({ summary: 'Modifica un angajat' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateEmployeeDto })
  @ApiResponse({ status: 200, description: 'Angajatul a fost modificat.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateEmployeeDto) { return this.service.update(id, dto); }

  @Delete(':id')
  @ApiOperation({ summary: 'Sterge un angajat' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Angajatul a fost sters.' })
  remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
