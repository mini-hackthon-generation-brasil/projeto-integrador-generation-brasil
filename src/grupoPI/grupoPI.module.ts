import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GrupoPI } from "./entities/grupoPI.entity";
import { GrupoPIService } from "./services/grupoPI.service";
import { GrupoPIController } from "./controllers/grupoPI.controller";

@Module({
    imports:[TypeOrmModule.forFeature ([GrupoPI]) ],
    providers: [GrupoPIService],
    controllers: [GrupoPIController],
    exports: [TypeOrmModule]
})

export class GrupoPIModule{}