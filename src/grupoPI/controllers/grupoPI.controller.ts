import { Controller,Body, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { GrupoPI } from "../entities/grupoPI.entity";
import { GrupoPIService } from "../services/grupoPI.service";

@Controller('/grupoPI')

export class GrupoPIController {
    constructor(private readonly GrupoPIService: GrupoPIService){}

        @Get()
        @HttpCode(HttpStatus.OK)
        findAll(): Promise <GrupoPI[]> {
            return this.GrupoPIService.findAll();
        }

        @Get('/:id')
        @HttpCode(HttpStatus.OK)
        findById (
            @Param ('id', ParseIntPipe)
            id:number
        ): Promise <GrupoPI> {
            return this.GrupoPIService.findById(id)
        }

        @Post()
        @HttpCode(HttpStatus.CREATED)
        create (
            @Body()
            grupoPI: GrupoPI
        ): Promise <GrupoPI> {
            return this.GrupoPIService.create(grupoPI)
        }

        @Put()
        @HttpCode(HttpStatus.OK)
        update (
            @Body()
            grupoPI: GrupoPI
        ): Promise <GrupoPI> {
            return this.GrupoPIService.update(grupoPI)
        }

        @Delete ('/:id')
        @HttpCode(HttpStatus.NO_CONTENT)
        delete (
            @Param('id', ParseIntPipe)
            id: number
        ) {
            return this.GrupoPIService.delete(id);
        }
}

export { GrupoPI };
