import { IsNotEmpty } from "class-validator";
import { GrupoPI } from "src/grupoPI/entities/grupoPI.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_turma'})
export class Turma {

    @PrimaryGeneratedColumn()
    id:number;

    @IsNotEmpty()
    @Column({length:1500, nullable:false})
    descricao:string

    @IsNotEmpty()
    @Column ({nullable:false})
    isAtivo:boolean

    @OneToMany(() => GrupoPI, (grupoPI)=> grupoPI.turma)

    grupoPI: GrupoPI[];
}