import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProjetoService } from '../services/projeto.service';
import { Projeto } from '../entities/projeto.entity';
import { DeleteResult } from 'typeorm';

@Controller('/projetos')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  buscarTodos(): Promise<Projeto[]> {
    return this.projetoService.buscarTodos();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  buscarId(@Param('id', ParseIntPipe) id: number): Promise<Projeto> {
    return this.projetoService.buscarId(id);
  }

  @Get('/:nomeProjeto')
  @HttpCode(HttpStatus.OK)
  buscarNome(@Param('nomeProjeto') nomeProjeto: string): Promise<Projeto[]> {
    return this.projetoService.buscarNome(nomeProjeto);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() projeto: Projeto): Promise<Projeto> {
    return this.projetoService.create(projeto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() projeto: Projeto): Promise<Projeto> {
    return this.projetoService.update(projeto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete (@Param('id', ParseIntPipe) id:number): Promise<DeleteResult>{
    return this.projetoService.delete(id);
  }
}
