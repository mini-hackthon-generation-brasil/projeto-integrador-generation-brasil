import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projeto } from '../entities/projeto.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class ProjetoService {
  constructor(
    @InjectRepository(Projeto)
    private projetoRepository: Repository<Projeto>,
  ) {}

  async buscarProjeto(projeto: string): Promise<Projeto> {
    return await this.projetoRepository.findOne({
      //   where: {
      //     projeto: projeto
      //   },
    });
  }

  async buscarTodos(): Promise<Projeto[]> {
    return await this.projetoRepository.find({
      // relations:{
      //     grupopi: true,
      // }
    });
  }

  async buscarId(id: number): Promise<Projeto> {
    let buscaProjeto = await this.projetoRepository.findOne({
      where: {
        id,
      },
      // relations: {
      //     grupopi: true,
      // }
    });

    if (!buscaProjeto)
      throw new HttpException('Projeto não encontrado !', HttpStatus.NOT_FOUND);

    return buscaProjeto;
  }

  async buscarNome(nomeProjeto: string): Promise<Projeto[]> {
    return await this.projetoRepository.find({
      where: {
        nomeProjeto: ILike(`${nomeProjeto}`),
      },
      // relations: {
      //   grupopi
      // }
    });
  }

  async create(projeto: Projeto): Promise<Projeto> {
    // if(projeto.grupopi){
    //     let grupopi = await this.grupopiService.buscaId(projeto.grupopi.id);

    //     if(!grupopi)
    //     throw new HttpException('Grupo não encontrado !', HttpStatus.NOT_FOUND)
    // }
    return await this.projetoRepository.save(projeto);
  }

  async update(projeto: Projeto): Promise<Projeto> {
    let buscaProjeto: Projeto = await this.buscarId(projeto.id);

    if (!buscaProjeto || !projeto.id)
      throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

    // if(projeto.grupopi){
    //     let grupopi = await this.grupoService.findById(projeto.grupopi.id)
    //     if(!grupopi)
    //         throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

    //     return await this.projetoRepository.save(projeto);
    // }

    return await this.projetoRepository.save(projeto);
  }

  async delete(id: number): Promise<DeleteResult> {
    let buscaProjeto = await this.buscarId(id);

    if (!buscaProjeto)
      throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

    return await this.projetoRepository.delete(id);
  }
}
