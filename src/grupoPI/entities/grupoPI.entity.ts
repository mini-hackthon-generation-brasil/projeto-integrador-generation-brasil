import { IsNotEmpty } from 'class-validator';
import { Projeto } from 'src/projeto/entities/projeto.entity';
import { Turma } from 'src/turma/entities/turma.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_grupoPI' })
export class GrupoPI {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  numeroGrupo: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  maisInfos: string;

  @ManyToOne(() => Projeto, (projeto) => projeto.grupoPI)
  projeto: Projeto;

  @ManyToOne(() => Turma, (turma) => turma.grupoPI)
  turma: Turma;
}
