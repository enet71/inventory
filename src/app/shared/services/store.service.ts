import {Injectable} from '@angular/core';
import {DataList} from '../item.data';
import {StaticMethods} from '../classes/static-methods';
import {InventoryService} from './inventory.service';
@Injectable()

export class StoreService {
    private itemList = [];
    private numItem: number = 10;
    private widthItem: number = 43.5;
    private heightItem: number = 53;

    constructor(private inventoryService: InventoryService) {
        this.itemList = DataList.getItemList();
    }

    public getItemList() {
        this.itemList.map(element => {
            StaticMethods.setCoords(element, 23, 43.5, 53);
            return element;
        });
        return this.itemList;
    }

    public buyItem(item, user) {
        if ((user.getMoney() - item.price) >= 0) {
            let clone = Object.assign({}, item);
            clone.isBought = true;
            user.addMoney(-item.price);
            this.inventoryService.addItem(clone);
        }
    }
}