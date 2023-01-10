import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TurmaService } from "../services/turma.service";
import { Turma } from "../entities/turma.entity";

@Controller('/turma')
export class TurmaController {
    constructor (private readonly TurmaService: TurmaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Turma[]> {
        return this.TurmaService.findAll();
    }

    @Get('/id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param ('id', ParseIntPipe)
        id:number
    ): Promise <Turma> {
        return this.TurmaService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create (
        @Body()
        turma: Turma
    ): Promise <Turma> {
        return this.TurmaService.create(turma);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update (
        @Body()
        turma: Turma
    ): Promise <Turma> {
        return this.TurmaService.update(turma)
    }

    @Delete ('/id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete (
        @Param('id', ParseIntPipe)
        id:number
    ){
        return this.TurmaService.delete(id);
    }
}