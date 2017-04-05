import {Component} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {itemValueList} from '../../shared/item.data';
import {User} from '../../shared/classes/user';
import {CharacterService} from '../../shared/services/character.service';
import {Battle} from '../../shared/classes/battle';
import {BattleStatisticService} from '../../shared/services/battle-statistic.service';
import {FireBaseService} from '../../shared/services/firebase.service';

@Component({
    selector: 'versus-table',
    templateUrl: 'versus-table.component.html',
    styleUrls: ['versus-table.component.css'],
})

export class VersusTableComponent {
    private user_1: User;
    private user_2: User;
    private winner: User;
    private battle;
    private battleOver: boolean = false;
    private battleLog = [];

    constructor(private userService: UserService, private battleStatisticService: BattleStatisticService, private firebaseService: FireBaseService) {
        const users = userService.getUsers();
        this.user_1 = users[0];
        this.user_2 = users[1];

        this.user_1.calculateCharacteristics();
        this.user_2.calculateCharacteristics();

        this.battle = new Battle(this.user_1, this.user_2, battleStatisticService, this.firebaseService);
    }

    private leftHunter = {state: -1, health: -1};
    private leftWarrior = {state: -1, health: -1};
    private leftMage = {state: -1, health: -1};

    private rightHunter = {state: -1, health: -1};
    private rightWarrior = {state: -1, health: -1};
    private rightMage = {state: -1, health: -1};

    onStart() {

        this.battle.startBattle().subscribe(element => {
            let hit = '' + element.hit + element.def;
            this.battleLog.unshift(element);
            switch (hit) {
                case '03':
                    this.leftHunter.state = 0;
                    this.rightHunter.health = element.hpEnemy;
                    break;
                case '04':
                    this.leftHunter.state = 1;
                    this.rightWarrior.health = element.hpEnemy;
                    break;
                case '05':
                    this.leftHunter.state = 2;
                    this.rightMage.health = element.hpEnemy;
                    break;
                case '13':
                    this.leftWarrior.state = 3;
                    this.rightHunter.health = element.hpEnemy;
                    break;
                case '14':
                    this.leftWarrior.state = 4;
                    this.rightWarrior.health = element.hpEnemy;
                    break;
                case '15':
                    this.leftWarrior.state = 5;
                    this.rightMage.health = element.hpEnemy;
                    break;
                case '23':
                    this.leftMage.state = 6;
                    this.rightHunter.health = element.hpEnemy;
                    break;
                case '24':
                    this.leftMage.state = 7;
                    this.rightWarrior.health = element.hpEnemy;
                    break;
                case '25':
                    this.leftMage.state = 8;
                    this.rightMage.health = element.hpEnemy;
                    break;
                case '30':
                    this.rightHunter.state = 9;
                    this.leftHunter.health = element.hpEnemy;
                    break;
                case '31':
                    this.rightHunter.state = 10;
                    this.leftWarrior.health = element.hpEnemy;
                    break;
                case '32':
                    this.rightHunter.state = 11;
                    this.leftMage.health = element.hpEnemy;
                    break;
                case '40':
                    this.rightWarrior.state = 12;
                    this.leftHunter.health = element.hpEnemy;
                    break;
                case '41':
                    this.rightWarrior.state = 13;
                    this.leftWarrior.health = element.hpEnemy;
                    break;
                case '42':
                    this.rightWarrior.state = 14;
                    this.leftMage.health = element.hpEnemy;
                    break;
                case '50':
                    this.rightMage.state = 15;
                    this.leftHunter.health = element.hpEnemy;
                    break;
                case '51':
                    this.rightMage.state = 16;
                    this.leftWarrior.health = element.hpEnemy;
                    break;
                case '52':
                    this.rightMage.state = 17;
                    this.leftMage.health = element.hpEnemy;
                    break;
            }
            setTimeout(() => {
                this.leftHunter.state = -1;
                this.leftWarrior.state = -1;
                this.leftMage.state = -1;

                this.rightHunter.state = -1;
                this.rightWarrior.state = -1;
                this.rightMage.state = -1;
            }, 400);
        }, err => {
            console.log(err);
        }, () => {
            this.battleOver = true;
            this.winner = this.battle.getWinner();
        });
    }
}