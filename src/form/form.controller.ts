import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { FormService } from './form.service';
import { User } from './form.entity';

@Controller('form')
export class FormController {

    constructor(
        private userService: FormService
    ) { }


    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUser();
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        return this.userService.createUser(newUser)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deletedUser(id)
    }

}
