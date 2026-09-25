import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('parents (companies)')
@Controller('parents')
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @Post()
  @ApiOperation({ summary: 'Creeaza o companie' })
  @ApiBody({ type: CreateCompanyDto })
  @ApiResponse({ status: 201, description: 'Compania a fost creata.' })
  create(@Body() dto: CreateCompanyDto) { return this.service.create(dto); }

  @Get()
  @ApiOperation({ summary: 'Afiseaza toate companiile' })
  @ApiResponse({ status: 200, description: 'Lista companiilor.' })
  findAll() { return this.service.findAll(); }

  @Get(':id')
  @ApiOperation({ summary: 'Afiseaza o companie dupa ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Compania solicitata.' })
  @ApiResponse({ status: 404, description: 'Compania nu exista.' })
  findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Put(':id')
  @ApiOperation({ summary: 'Modifica o companie' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateCompanyDto })
  @ApiResponse({ status: 200, description: 'Compania a fost modificata.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCompanyDto) { return this.service.update(id, dto); }

  @Delete(':id')
  @ApiOperation({ summary: 'Sterge o companie' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Compania a fost stearsa.' })
  remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
