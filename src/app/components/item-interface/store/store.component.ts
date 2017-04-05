import {Component} from '@angular/core';
import {StoreService} from '../../../shared/services/store.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../shared/classes/user';
import {UserService} from '../../../shared/services/user.service';

@Component({
    selector: 'store',
    templateUrl: 'store.component.html',
    styleUrls: ['store.component.css']
})

export class StoreComponent {
    private itemList = [];
    private user: User;

    constructor(private storeService: StoreService,
                private route: ActivatedRoute,
                private userService: UserService) {

        this.itemList = storeService.getItemList();

        this.route.params.subscribe(parameter => {
            this.user = this.userService.getUserById(parameter['id']);
        });
    }
}