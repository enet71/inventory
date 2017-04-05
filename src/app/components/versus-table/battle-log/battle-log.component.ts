import {Component, Input} from '@angular/core';
@Component({
    selector: 'battle-log',
    templateUrl: 'battle-log.component.html',
    styleUrls: ['battle-log.component.css']
})

export class BattleLogComponent {
    @Input() battleList = [];
    @Input() user_1;
    @Input() user_2;

    getText(val) {
        let result = '';
        result += `Player ${this.getUser(val.hit).getName().toUpperCase()} (${this.getHero(val.hit)}) hit the Player ${this.getUser(val.def).getName().toUpperCase()} (${this.getHero(val.def)}) ${val.damage} damage;`;
        return result;
    }

    getUser(value) {
        if (value < 3) {
            return this.user_1;
        } else {
            return this.user_2;
        }
    }

    getHero(value) {
        if (value == 0 || value == 3) {
            return 'Hunter';
        }

        if (value == 1 || value == 4) {
            return 'Warrior';
        }

        if (value == 2 || value == 5) {
            return 'Mage';
        }
    }
}