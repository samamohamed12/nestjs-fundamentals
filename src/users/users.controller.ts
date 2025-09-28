import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode, HttpStatus, ParseUUIDPipe, ValidationPipe, UsePipes, Query } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuidv4 } from 'uuid';
import { UserService } from './users.service';
//import { ValidationPipe} from './pipes/validation.pipe';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get()
    find(): UserEntity[] {
        return this.userService.findUsers();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
       console.log(typeof id);
       return this.userService.findUserById(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
          return this.userService.createUser(createUserDto)
            
        };
       

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.deleteUser(id);

    }
}