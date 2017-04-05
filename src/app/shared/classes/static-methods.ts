export class StaticMethods {
    static clearPushArray(clear,push){
        clear.splice(0);
        for(let item of push){
            clear.push(item);
        }
    }

    static calculateBonuses(list){
        let strength = 0;
        let agility = 0;
        let intelligence = 0;

        for (let item of list) {
            strength += item.bonuses.strength;
            agility += item.bonuses.agility;
            intelligence += item.bonuses.intelligence;
        }

        return {strength,agility,intelligence}
    }

    static setCoords(element,numItem,widthItem,heightItem) {
        const y = Math.floor(element.inventoryIndex / numItem);
        const x = Math.floor(element.inventoryIndex - (numItem * y));

        element.left = x * widthItem + 14 + x * 4;
        element.top = y * heightItem + 12 + y * 4;
    }
}