import { TypeOrmModule } from "@nestjs/typeorm";
import { TurmaService } from "./services/turma.service";
import { Module } from "@nestjs/common";
import { TurmaController } from "./controllers/turma.controller";
import { Turma } from "./entities/turma.entity";


@Module({
    imports: [TypeOrmModule.forFeature ([Turma])],
    providers:[TurmaService]  ,
    controllers:[TurmaController] ,
    exports: [TypeOrmModule]
})

export class TurmaModule{}