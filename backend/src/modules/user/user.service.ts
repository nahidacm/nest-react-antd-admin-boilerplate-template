import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../../services/prisma.service";
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    return this.prisma.user.create({
      data: {...createUserDto, password: hash}
    });
  }

  async findAll(params: string[]) {
    const accounts = await this.prisma.user.findMany({
      skip: params['skip'],
      take: params['take']
    })
    return accounts;
  }

  async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>{
    let user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
