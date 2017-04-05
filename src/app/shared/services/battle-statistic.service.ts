import {Injectable} from '@angular/core';

@Injectable()
export class BattleStatisticService {
    private name = 'battle-statistic';

    constructor() {
    }

    public getBattleList() {
        return JSON.parse(localStorage.getItem(this.name));
    }

    public setBattleList(list) {
        localStorage.setItem(this.name, JSON.stringify(list));
    }

    public addToList(element) {
        this.clearCircular(element);
        let list = JSON.parse(localStorage.getItem(this.name)) || [];
        list.unshift(element);
        this.setBattleList(list);
    }

    public clearCircular(element) {
        element.lose.hunter.enemy = {};
        element.lose.mage.enemy = {};
        element.lose.warrior.enemy = {};

        element.win.hunter.enemy = {};
        element.win.mage.enemy = {};
        element.win.warrior.enemy = {};
    }
}
