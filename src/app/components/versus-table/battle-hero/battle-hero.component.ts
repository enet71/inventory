import {
    Component, trigger, state, style, transition, animate, keyframes, Input, OnChanges,
    SimpleChanges
} from '@angular/core';
import {Hero} from '../../../shared/classes/hero';
import {itemValueList} from '../../../shared/item.data';
import {animations} from '../../../shared/classes/animations';

@Component({
    selector: 'battle-hero',
    templateUrl: 'battle-hero.component.html',
    styleUrls: ['battle-hero.component.css'],
    animations: animations
})

export class BattleHero {
    @Input() hero: Hero;
    @Input() characterList;
    @Input() state;
    @Input() name;
    private healthFullWidth = 344;
    private itemValueList;

    constructor() {
        this.itemValueList = itemValueList;
    }

    getClass(item, hero) {
        for (let element of hero) {
            if (element.itemValue == item) {
                return [item, element.styles.spriteClassMini, element.inventoryCoordsClass];
            }
        }
        return [item];
    }

    getHealthStyle() {
        let result = {};
        let healthCurrentWidth = this.healthFullWidth;
        if (this.state.health != -1) {
            healthCurrentWidth = this.state.health * 100 / this.hero.getMaxHealth();
            healthCurrentWidth = healthCurrentWidth * this.healthFullWidth / 100;
        }
        result['width'] = healthCurrentWidth + 'px';
        return result;
    }

    getMainStyle() {
        let result = {};
        if (this.state.health == 0) {
            result['background-color'] = 'rgba(69, 6, 6, 0.6)';
        }
        return result;
    }
}