import {StaticMethods} from './static-methods';
import {Hero} from './hero';

export class User {
    private id;
    private hunter;
    private warrior;
    private mage;

    constructor(private name: string, private money, private characterList?, private heroList?) {
        this.id = Date.now();
    }

    public setCharacterList(characterList) {
        this.characterList = characterList;
    }

    public setHeroList(heroList) {
        this.heroList = heroList;
    }

    public getHeroList() {
        return this.heroList;
    }

    public getCharacterList() {
        return this.characterList;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getBonusesOfCharacter(index) {
        const list = this.characterList[index];
        return StaticMethods.calculateBonuses(list);
    }

    public getHunterStats() {
        return this.heroList[0];
    }

    public getWarriorStats() {
        return this.heroList[1];
    }

    public getMageStats() {
        return this.heroList[2];
    }

    public calculateCharacteristics() {
        const bonuses_0 = this.getBonusesOfCharacter(0);
        let health = this.getHealth(+this.heroList[0].strength + +bonuses_0.strength);
        let damage = this.getDamage(+this.heroList[0].agility + +bonuses_0.agility);
        let strength = +this.heroList[0].strength + +bonuses_0.strength;
        let agility = +this.heroList[0].agility + +bonuses_0.agility;
        let intelligence = +this.heroList[0].intelligence + +bonuses_0.intelligence;
        this.hunter = new Hero(strength, agility, intelligence, health, damage);

        const bonuses_1 = this.getBonusesOfCharacter(1);
        health = this.getHealth(+this.heroList[1].strength + +bonuses_1.strength);
        damage = this.getDamage(+this.heroList[1].strength + +bonuses_1.strength);
        strength = +this.heroList[1].strength + +bonuses_1.strength;
        agility = +this.heroList[1].agility + +bonuses_1.agility;
        intelligence = +this.heroList[1].intelligence + +bonuses_1.intelligence;
        this.warrior = new Hero(strength, agility, intelligence, health, damage);

        const bonuses_2 = this.getBonusesOfCharacter(2);
        health = this.getHealth(+this.heroList[2].strength + +bonuses_2.strength);
        damage = this.getDamage(+this.heroList[2].intelligence + +bonuses_2.intelligence);
        strength = +this.heroList[2].strength + +bonuses_2.strength;
        agility = +this.heroList[2].agility + +bonuses_2.agility;
        intelligence = +this.heroList[2].intelligence + +bonuses_2.intelligence;
        this.mage = new Hero(strength, agility, intelligence, health, damage);

    }

    public getHealth(strength) {
        return strength * 10;
    }

    public getDamage(attribute) {
        return attribute * 2;
    }

    public getHunter(): Hero {
        return this.hunter;
    }

    public getWarrior(): Hero {
        return this.warrior;
    }

    public getMage(): Hero {
        return this.mage;
    }

    public getMoney(): number {
        return this.money;
    }

    public setMoney(value: number) {
        this.money = value;
    }

    public addMoney(value: number) {
        this.money += value;
    }
}