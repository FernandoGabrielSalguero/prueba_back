import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Papel*01',
        database: 'Prueba',
        entities: [__dirname + '/**/*.entity{.tsm .js}'],
        synchronize: true, // (eliminar en producción)
        autoLoadEntities: true,
      }
    ),
    FormModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
