import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './form.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class FormService {

constructor(@InjectRepository(User) private userRepository: Repository<User>) {}


createUser (user: CreateUserDto){
    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
}

getUser(){
    return this.userRepository.find()
}

deletedUser(id: number) { 
    return this.userRepository.delete({id})
}

}
