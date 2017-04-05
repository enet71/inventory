import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {element} from 'protractor';

@Injectable()
export class UserService {
    private max: number = 2;
    private users: User[] = [];

    public addUser(user: User): boolean {
        if (this.hasNext()) {
            this.users.push(user);
            return true;
        }
        return false;
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getUserById(id): User {
        return this.users.find(element => {
            if (element.getId() == id) {
                return true;
            }
        });
    }

    public getCurrentSize(): number {
        return this.users.length;
    }

    public getMax(): number {
        return this.max;
    }

    public hasNext(): boolean {
        return this.users.length < this.max;
    }

    public clearUsers() {
        this.users.splice(0);
    }
}