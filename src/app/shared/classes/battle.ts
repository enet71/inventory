import {User} from './user';
import {Hero} from './hero';
import {Observable} from 'rxjs';
import {BattleStatisticService} from '../services/battle-statistic.service';
import {FireBaseService} from '../services/firebase.service';
import {EventEmitter} from '@angular/core';

export class Battle {
    private user1_heroList: Hero[] = [];
    private user2_heroList: Hero[] = [];
    private heroList: Hero[] = [];
    private hasWinner = false;
    private winner: User;
    private battleInterval;
    private log = [];
    private winMoney = 500;
    private loseMoney = -250;

    constructor(private user1: User, private user2: User, private battleStatistic, private firebaseService: FireBaseService) {
        this.setEnemies(user1, user2);
        this.setEnemies(user2, user1);

        this.setHeroList(user1, this.user1_heroList);
        this.setHeroList(user2, this.user2_heroList);

        this.pushHeroList(user1);
        this.pushHeroList(user2);

        this.setReady();
    }

    public pushHeroList(user) {
        this.heroList.push(user.getHunter());
        this.heroList.push(user.getWarrior());
        this.heroList.push(user.getMage());
    }

    public setHeroList(user, list) {
        list.push(user.getHunter());
        list.push(user.getWarrior());
        list.push(user.getMage());
    }

    public setEnemies(user1, user2) {
        user1.getHunter().setEnemy(user2.getHunter());
        user1.getWarrior().setEnemy(user2.getWarrior());
        user1.getMage().setEnemy(user2.getMage());
    }

    public startBattle() {
        while (this.hasWinner == false) {
            this.hitAll();
        }

        let iterator = this.log[Symbol.iterator]();
        return Observable.create((observer) => {
            const interval = setInterval(() => {
                let result = iterator.next();
                if (result.done) {
                    clearInterval(interval);
                    observer.complete();
                } else {
                    observer.next(result.value);
                }
            }, 600);
        });
    }

    public setReady() {
        for (let hero of this.user1_heroList) {
            if (Math.random() < 0.5) {
                hero.setReady(true);
            } else {
                hero.getEnemy().setReady(true);
            }
        }
    }

    public hitAll() {
        for (let hero of this.heroList) {
            if (hero.getLifeStatus()) {
                if (hero.isReady()) {
                    hero.hitEnemy();
                    this.logPush(hero);
                    if (hero.getHasEnemy() == false) {
                        hero.setEnemy(this.findEnemy(hero));
                    }
                }
                hero.toggleReady();
            }
        }
        this.checkWin();
    }

    public logPush(hero) {
        let logObj = {
            hit: this.heroList.indexOf(hero),
            def: this.heroList.indexOf(hero.getEnemy()),
            hpHero: hero.getHealth(),
            hpEnemy: hero.getEnemy().getHealth(),
            damage: hero.getDamage()
        };
        this.log.push(logObj);
    }

    public findEnemy(hero): Hero {
        const list = this.getList(hero.getEnemy());

        let resHero;
        for (let hero of list) {
            if ((!resHero || hero.getHealth() < resHero.getHealth()) && hero.getLifeStatus()) {
                resHero = hero;
            }
        }

        return resHero;
    }

    public getList(hero): Hero[] {
        if (this.user1_heroList.indexOf(hero) != -1) {
            return this.user1_heroList;
        }
        if (this.user2_heroList.indexOf(hero) != -1) {
            return this.user2_heroList;
        }
    }

    public checkWin() {
        let user1Lose = true;
        for (let item of this.user1_heroList) {
            if (item.getLifeStatus() == true) {
                user1Lose = false;
            }
        }

        let user2Lose = true;
        for (let item of this.user2_heroList) {
            if (item.getLifeStatus() == true) {
                user2Lose = false;
            }
        }

        if (user1Lose == true) {
            this.win(this.user2);
            this.setStatistic(this.user2, this.user1);
            this.user2.addMoney(this.winMoney);
            this.user1.addMoney(this.loseMoney);
            this.firebaseService.updateHero(this.user2.getName(), this.user2.getMoney());
            this.firebaseService.updateHero(this.user1.getName(), this.user1.getMoney());
        } else if (user2Lose == true) {
            this.win(this.user1);
            this.setStatistic(this.user1, this.user2);
            this.user1.addMoney(this.winMoney);
            this.user2.addMoney(this.loseMoney);
            this.firebaseService.updateHero(this.user2.getName(), this.user2.getMoney());
            this.firebaseService.updateHero(this.user1.getName(), this.user1.getMoney());
        }
    }

    public win(user) {
        this.winner = user;
        this.hasWinner = true;
    }

    public getWinner(): User {
        return this.winner;
    }

    public setStatistic(win, lose) {
        const obj = {win, lose};
        this.battleStatistic.addToList(obj);
    }
}