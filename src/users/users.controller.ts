import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  async findAll() {
    const users = this.userService.findAll();
    return users;
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    return user;
  }

  @Post('/')
  async add(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.userService.add(registerUserDto);
    return user.id;
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.userService.update(id, updateUserDto);
    return id;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.userService.delete(id);
    return id;
  }
}
