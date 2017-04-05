import {Component} from '@angular/core';
import {BattleStatisticService} from '../../shared/services/battle-statistic.service';
@Component({
    selector: 'battle-statistic',
    templateUrl: 'battle-statistic.component.html',
    styleUrls: ['battle-statistic.component.css']
})

export class BattleStatistic {
    private battleList;

    constructor(private battleStatisticService: BattleStatisticService) {
        this.battleList = battleStatisticService.getBattleList();
    }

    getPlayer(item, status:boolean): string {
        if (item.win.id < item.lose.id) {
            return status ? 'Player 1' : 'Player 2';
        } else {
            return status ? 'Player 2' : 'Player 1';
        }
    }
}
