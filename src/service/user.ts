import * as express from "express";
import { injectable } from 'inversify';
import { inject } from "inversify";
import { Repository } from "typeorm";
import { User } from "../entities/user";
import { TYPES } from "../constant/types";
import { response } from 'inversify-express-utils';
export interface IUser {
  email: string;
  name: string;
}

@injectable()
export class UserService {

  private userStorage: IUser[] = [{
    email: 'lorem@ipsum.com',
    name: 'Lorem'
  }, {
    email: 'doloe@sit.com',
    name: 'Dolor'
  }];

  private readonly _userRepository: Repository<User>;
  public constructor(
    @inject(TYPES.UserRepository) UserRepository: Repository<User>
  ) {
    this._userRepository = UserRepository;
  }

  public async getUsers(
    @response() res: express.Response
) {
    try {
        return await this._userRepository.find();
    } catch(e) {
        res.status(500);
        res.send(e.message);
    }
}

  public getUser(id: string): IUser {
    return this.userStorage.find(user => user.name === id);
  }

  public newUser(user: IUser): IUser {
    this.userStorage.push(user);
    return user;
  }

  public updateUser(id: string, user: IUser): IUser {
    this.userStorage.forEach((entry, index) => {
      if (entry.name === id) {
        this.userStorage[index] = user;
      }
    });

    return user;
  }

  public deleteUser(id: string): string {
    this.userStorage = this.userStorage.filter(user => user.name !== id);
    return id;
  }
}
