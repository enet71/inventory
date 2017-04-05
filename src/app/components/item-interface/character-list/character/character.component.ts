import {Component, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import {CharacterService} from '../../../../shared/services/character.service';
import {itemValueList} from '../../../../shared/item.data';
import {ItemService} from '../../../../shared/services/item.service';

@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css']
})

export class CharacterComponent implements OnInit {
    private itemList = [];
    private character = {};
    private itemValueList = [];
    private drag;
    private hero = {};
    private backgroundList = [
        'http://image.prntscr.com/image/10a0260ee4dd486eb6d6f3cb667268f0.png',
        'http://image.prntscr.com/image/3e7b45b8528f481cbdb02f5b84f89c53.png',
        'http://image.prntscr.com/image/560833905a3249fba6546855bd7a8f9b.png'];
    private index = 0;

    @Input() user;

    constructor(private itemService: ItemService, private characterService: CharacterService) {
        this.itemList = characterService.getItemListCharacter();
        this.character = characterService.character;
        this.itemValueList = itemValueList;
        this.drag = itemService.drag;
    }

    ngOnInit(): void {
        this.user.setHeroList([this.characterService.hunterGenerate(), this.characterService.warriorGenerate(), this.characterService.mageGenerate()]);
        this.getHero();
    }

    changeIndex(index) {
        this.index = index;
        this.getHero();
    }

    onDragOver(ev, itemVal) {
        for (let item of this.itemService.dragItem.itemValues) {
            if (itemVal == item.value) {
                ev.preventDefault();
            }
        }
    }

    onDrop(ev, itemVal) {
        this.itemService.drag.isDragged = false;

        for (let item of this.itemService.dragItem.itemValues) {
            if (itemVal == item.value) {
                ev.preventDefault();

                if (this.itemService.dragItem.status) {
                    this.itemService.moveItemToAnotherPlace(this.itemService.dragItem, item);
                } else {
                    this.itemService.dragItem.characterCoordsClass = item.characterCoords;
                    this.itemService.dragItem.itemValue = item.value;
                    this.itemService.toggleItem(this.itemService.dragItem);
                }
            }
        }
    }

    getStyle(item) {
        let resultult = {};
        if (this.drag.isDragged) {
            resultult['background-color'] = 'rgba(147, 15, 18, 0.36)';
            for (let element of this.itemService.dragItem.itemValues) {
                if (item == element.value) {
                    resultult['background-color'] = 'rgba(52, 138, 34, 0.36)';
                }
            }
            resultult['display'] = 'block';
        } else {
            resultult['display'] = 'none';
        }
        return resultult;
    }

    getStyleCharacter() {
        let result = {};
        result['background-image'] = `url('${this.backgroundList[this.index]}')`;
        return result;
    }

    getStyleCharacteristic(index) {
        let result = {};
        if (index == this.index) {
            result['color'] = '#00db2e';
        }
        return result;
    }

    getHero() {
        if (this.index == 0) {
            this.hero = this.user.getHunterStats();
        } else if (this.index == 1) {
            this.hero = this.user.getWarriorStats();
        } else if (this.index == 2) {
            this.hero = this.user.getMageStats();
        }
    }
}