import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/users')
  async getUsers() {
    const users = this.userService.findUsers();
    return users;
  }

  @Get('/user/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findUser(id);
    return user;
  }

  @Post('/user')
  async addUser(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.userService.addUser(registerUserDto);
    return user.id;
  }

  @Patch('/user/:id')
  async updateUserById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.userService.updateUser(id, updateUserDto);
    return id;
  }

  @Delete('/user/:id')
  async deleteUserById(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return id;
  }
}
