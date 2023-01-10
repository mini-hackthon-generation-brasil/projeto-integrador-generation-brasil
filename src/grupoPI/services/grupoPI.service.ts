import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { GrupoPI } from "../entities/grupoPI.entity";

@Injectable()
export class GrupoPIService {
    constructor(
        @InjectRepository(GrupoPI)
        private grupoPIRepository: Repository <GrupoPI>
    ) {}

    async findAll (): Promise <GrupoPI[]> {
        return await this.grupoPIRepository.find({
            relations:{
                turma: true
            }
        });
    }
    async findById (id:number): Promise <GrupoPI> {
        let grupoPI = await this.grupoPIRepository.findOne({
            where:{
                id
            },
            relations:{
                turma: true
            }
        });

        if (!grupoPI)
            throw new HttpException ('Grupo não encontrado', HttpStatus.NOT_FOUND )
        return grupoPI
    }

    async create (grupoPI: GrupoPI): Promise <GrupoPI> {
        return await this.grupoPIRepository.save(grupoPI)
    }

    async update (grupoPI: GrupoPI): Promise <GrupoPI> {
        let buscaGrupoPI: GrupoPI = await this.findById(grupoPI.id)

        if (!buscaGrupoPI || !grupoPI.id)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);

        return await this.grupoPIRepository.save(grupoPI)
    }

    async delete (id:number): Promise <DeleteResult> {
        let buscaGrupoPI = await this.findById(id);

        if (!buscaGrupoPI)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);
        
        return await this.grupoPIRepository.delete(id);
    }
}