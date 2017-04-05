import {Injectable} from '@angular/core';
import {StaticMethods} from '../classes/static-methods';

@Injectable()
export class CharacterService {
    private itemListCharacter: any = [];

    public character = {
        strength: 0,
        agility: 0,
        intelligence: 0,
    };

    public calculateBonuses() {
        this.character.strength = 0;
        this.character.agility = 0;
        this.character.intelligence = 0;

        for (let item of this.itemListCharacter) {
            this.character.strength += item.bonuses.strength;
            this.character.agility += item.bonuses.agility;
            this.character.intelligence += item.bonuses.intelligence;
        }
    }

    public getItemListCharacter() {
        return this.itemListCharacter;
    }

    public setItemListCharacter(itemList) {
        StaticMethods.clearPushArray(this.itemListCharacter, itemList);
    }

    public removeItem(item) {
        if (this.itemListCharacter.indexOf(item) != -1) {
            this.itemListCharacter.splice(this.itemListCharacter.indexOf(item), 1);
        }
    }

    public removeFillItems(item) {
        if (item.fill) {
            const length = this.itemListCharacter.length;
            for (let i = length - 1; i >= 0; i--) {
                if (this.itemListCharacter[i].index == item.index) {
                    this.removeItem(this.itemListCharacter[i]);
                }
            }
        }
    }

    public clearList() {
        this.itemListCharacter.splice(0);
    }

    public mageGenerate() {
        return {
            strength: this.getRandomStat(50, 150),
            agility: this.getRandomStat(50, 150),
            intelligence: this.getRandomStat(300, 500)
        };
    }

    public warriorGenerate() {
        return {
            strength: this.getRandomStat(300, 500),
            agility: this.getRandomStat(50, 150),
            intelligence: this.getRandomStat(50, 150)
        };
    }

    public hunterGenerate() {
        return {
            strength: this.getRandomStat(50, 150),
            agility: this.getRandomStat(300, 500),
            intelligence: this.getRandomStat(50, 150)
        };
    }

    public getRandomStat(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}