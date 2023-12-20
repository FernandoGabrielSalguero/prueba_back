import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './form.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [FormController],
    providers: [FormService]
})
export class FormModule { }
