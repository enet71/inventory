import {Injectable} from '@angular/core';
import {CharacterService} from './character.service';
import {InventoryService} from './inventory.service';

@Injectable()
export class ItemService {
    public dragItem;
    public drag = {
        isDragged: false,
        zIndex: 0,
        itemVal: -1
    };

    private itemListCharacter: any = [];
    private itemList = [];


    constructor(private characterService: CharacterService, private inventoryService: InventoryService) {
        this.itemList = inventoryService.getItemList();
        this.itemListCharacter = characterService.getItemListCharacter();
    }

    public getItemList() {
        return this.itemList;
    }

    public getItemListCharacter() {
        return this.itemListCharacter;
    }

    public toggleItem(item) {
        this.removeItem(item);
        if (item.status == false) {
            this.moveItemToCharacter(item);
        } else {
            this.moveItemToInventory(item);
        }
    }

    public moveItemToAnotherPlace(dragItem, item) {
        let replace = this.getItemByValue(item.value);
        if (replace) {
            replace.itemValue = dragItem.itemValue;
            replace.characterCoordsClass = dragItem.characterCoordsClass;
        }
        dragItem.itemValue = item.value;
        dragItem.characterCoordsClass = item.characterCoords;
    }

    public moveItemToCharacter(item) {
        const replace = this.getItemByValue(item.itemValue);
        if (replace) {
            this.removeItem(replace);
            this.characterService.removeFillItems(replace);
            replace.status = false;
            this.inventoryService.addItemInventoryIndex(replace, item.inventoryIndex);
        }

        if (item.fill) {
            this.moveFillItemToCharacter(item);
        } else {
            item.status = true;
            this.itemListCharacter.push(item);
        }
        this.characterService.calculateBonuses();
    }

    public moveFillItemToCharacter(item) {
        let added: boolean = false;
        for (let element of item.itemValues) {
            const clone = this.createItemClone(item, element, added);
            const replace = this.getItemByValue(clone.itemValue);

            if (replace) {
                this.removeItem(replace);
                this.moveItemToInventory(replace);
            }

            this.itemListCharacter.push(clone);
            added = true;
        }
    }

    public moveItemToInventory(item) {
        this.characterService.removeFillItems(item);
        item.status = false;
        this.inventoryService.addItem(item);
        this.characterService.calculateBonuses();
    }

    public getItemByValue(itemValue) {
        let result;
        this.itemListCharacter.find(element => {
            if (itemValue == element.itemValue) {
                result = element;
            }
        });
        return result;
    }

    public createItemClone(item, itemValues, bonuses: boolean) {
        let clone = Object.assign({}, item);
        clone.characterCoordsClass = itemValues.characterCoords;
        clone.itemValue = itemValues.value;
        clone.status = true;
        if (bonuses) {
            clone.bonuses = {
                strength: 0,
                agility: 0,
                intelligence: 0
            };
            clone.opacity = true;
        }
        return clone;
    }

    public setCoordsXY(element, x, y) {
        if (!element.status) {
            x = Math.ceil(x / 50);
            y = Math.ceil(y / 60);

            const invId = Math.ceil((y - 1) * 10 + x) - 1;
            const find = this.inventoryService.findItemInventoryIndex(invId);

            if (find) {
                this.inventoryService.swapItems(find, element);
            } else {
                this.removeItem(element);
                this.inventoryService.addItemInventoryIndex(element, invId);
            }
        } else {
            this.removeItem(element);
            this.moveItemToInventory(element);
        }
    }


    public removeItem(item) {
        if (item.status == false) {
            this.inventoryService.removeItem(item);
        } else {
            this.characterService.removeItem(item);
        }
    }
}