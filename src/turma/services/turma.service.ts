import { InjectRepository } from "@nestjs/typeorm";
import { Turma } from "../entities/turma.entity";
import { DeleteResult, Repository } from "typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class TurmaService {
    constructor(
        @InjectRepository(Turma)
        private turmaRepository: Repository <Turma>
    ) {}

    async findAll (): Promise <Turma[]> {
        return await this.turmaRepository.find({
            relations:{
                grupoPI: true
            }
        });
    }

    async findById (id: number): Promise <Turma> {
        let turma = await this.turmaRepository.findOne({
            where:{
                id
            },
            relations:{
                grupoPI: true
            }
        });

        if (!turma)
        throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND)
        return turma;
    }

    async create (turma: Turma): Promise <Turma> {
        return await this.turmaRepository.save(turma)
    }

    async update (turma: Turma): Promise <Turma> {
        let buscaTurma: Turma = await this.findById(turma.id)
        
        if (!buscaTurma || !turma.id)
            throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND);

        return await this.turmaRepository.save(turma)
    }

    async delete (id:number): Promise <DeleteResult> {
        let buscaTurma = await this.findById(id);

        if(!buscaTurma)
            throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND)

        return await this.turmaRepository.delete(id);
    }
}
