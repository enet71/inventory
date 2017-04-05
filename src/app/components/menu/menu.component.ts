import {Component} from '@angular/core';
import {UserService} from '../../shared/services/user.service';

@Component({
    selector: 'menu-component',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})

export class MenuComponent {
    constructor(private userService: UserService) {
    }

    onClearUsers() {
        this.userService.clearUsers();
    }
}