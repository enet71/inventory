import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CharacterService} from '../../../shared/services/character.service';
import {InventoryService} from '../../../shared/services/inventory.service';
import {UserService} from '../../../shared/services/user.service';
import {StaticMethods} from '../../../shared/classes/static-methods';
import {User} from '../../../shared/classes/user';

@Component({
    selector: 'character-list',
    templateUrl: 'character-list.component.html',
    styleUrls: ['character-list.component.scss']
})

export class CharacterListComponent {
    private currentList = [];
    private lists = [[], [], []];
    private selectItem: number = 0;
    private user: User;

    constructor(private characterService: CharacterService,
                private userService: UserService,
                private router: Router,
                private inventoryService: InventoryService,
                private route: ActivatedRoute) {
        this.currentList = this.lists[0];
        this.route.params.subscribe(parameter => {
            this.user = this.userService.getUserById(parameter['id']);
        });
    }

    swapList(list) {
        StaticMethods.clearPushArray(this.currentList, this.characterService.getItemListCharacter());
        this.currentList = list;
        this.characterService.setItemListCharacter(list);
        this.characterService.calculateBonuses();
    }

    onStart() {
        StaticMethods.clearPushArray(this.currentList, this.characterService.getItemListCharacter());
        this.user.setCharacterList(this.lists);

        this.inventoryService.reloadList();
        this.characterService.clearList();

        if (this.userService.hasNext()) {

            this.router.navigate(['createUser']);
        } else {
            this.router.navigate(['versus-table']);
        }
        this.characterService.calculateBonuses();
    }

    setSelectItem(index) {
        this.selectItem = index;
    }

    getItemStyle(index) {
        let result = {};
        if (index == this.selectItem) {
            result['text-decoration'] = 'underline';
        }
        return result;
    }
}