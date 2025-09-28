import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { CreateUserDto } from "./dtos/createUser.dto";

@Injectable()
export class UserService {
private users: UserEntity[] =[];

findUsers(): UserEntity[] {
     return this.users;
}

findUserById(id: string): UserEntity | undefined {
    return this.users.find(user => user.id === id);
}

createUser(createUserDto: CreateUserDto): UserEntity {
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    this.users.push(newUser);
    return newUser;
}

updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity | undefined {
    const user = this.findUserById(id);
    if (user) {
        Object.assign(user, updateUserDto);
    }
    return user;
}

deleteUser(id: string): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        this.users.splice(userIndex, 1);
        return true;
    }
    return false;
}
}