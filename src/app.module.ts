import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3306,
  //     username: 'root',
  //     password: 'root',
  //     database: 'mini_hackthon',
  //     entities: [],
  //     synchronize: true,
  //   })
  // ],

  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
