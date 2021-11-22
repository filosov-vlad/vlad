import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { v4 } from 'uuid';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  registret(email :string, password: string){
    this.usersRepository.save({
      email,
      password_hash: password,
      nickname: 'aboba',
      id: v4(),
      firstname: 'vlad',
      middlename: ' vladd',
      lastname: 'vladislav'
    })
  }
  find(): Promise<User[]> {
    return this.usersRepository.find();
  }

  delete(email :string){
    return this.usersRepository.delete({
      email
    }).then((result) => result.raw);
  }

}
