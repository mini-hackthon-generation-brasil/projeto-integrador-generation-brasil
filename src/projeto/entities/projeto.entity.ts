import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_projeto' })
export class Projeto {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({ length: 255 })
  public nomeProjeto: string;

  @Column({ length: 3000, nullable: true })
  public logoProjeto: string;

  @IsNotEmpty()
  @Column({ length: 3000, nullable: false })
  public linkProjeto: string;

  @IsNotEmpty()
  @Column({ length: 300, nullable: false })
  public pitProjeto: string;

  // @OneToMany(() => GrupoPI, (grupopi) => grupopi.projeto)
  //     grupopi: GrupoPI[]
}
