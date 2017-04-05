import {items} from "./items";
export const itemValueList = [
    "shoulders",
    "hands",
    "finger-left",
    "hand-left",
    "head",
    "torso",
    "waist",
    "legs",
    "feet",
    "neck",
    "bracers",
    "finger-right",
    "hand-right"
];

export class DataList {
    private static numItem: number = 10;
    private static widthItem: number = 43.5;
    private static heightItem: number = 53;

    static getItemList() {
        return itemList.slice();
    }

    static reloadList() {
        for (let i = 0; i < itemList.length; i++) {
            itemList[i].status = false;
            itemList[i].inventoryIndex = i;
            this.setCoords(itemList[i]);
        }
    }

    static setCoords(element) {
        const y = Math.floor(element.inventoryIndex / this.numItem);
        const x = Math.floor(element.inventoryIndex - (this.numItem * y));

        element.left = x * this.widthItem + 14 + x * 4;
        element.top = y * this.heightItem + 12 + y * 4;
    }

    static inventorySort() {
        itemList.sort((a, b) => a.inventoryIndex < b.inventoryIndex ? -1 : 1);
    }
}

export const itemList = items;