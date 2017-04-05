import {Component} from '@angular/core';
import {User} from '../../shared/classes/user';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {FireBaseService} from '../../shared/services/firebase.service';
@Component({
    selector: 'user-create',
    templateUrl: 'user-create.component.html',
    styleUrls: ['user-create.component.scss']
})

export class UserCreateComponent {
    private player: string = 'Player# 1';
    private name: string;

    constructor(private userService: UserService, private router: Router, private firebaseService: FireBaseService) {
        this.player = 'Player# ' + (userService.getCurrentSize() + 1);
    }


    onEnter() {
        let loadUser;
        let auth = this.firebaseService.getHero(this.name).subscribe(data => {
            loadUser = data;
            let user;
            if (loadUser.name) {
                user = new User(this.name, loadUser.money);
            } else {
                user = new User(this.name, 1000);
                this.firebaseService.addCustomKey(this.name, {name: this.name, money: 1000});
            }
            auth.unsubscribe();
            this.userService.addUser(user);
            this.router.navigate(['itemInterface', user.getId()]);
        });
    }
}