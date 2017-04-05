import {Component, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {ItemService} from '../../../shared/services/item.service';

@Component({
    selector: 'inventory',
    templateUrl: 'inventory.component.html',
    styleUrls: ['inventory.component.css']
})

export class InventoryComponent {
    @ViewChild('inventory')
    private inventory: ElementRef;
    itemList = [];

    constructor(private itemService: ItemService) {
        this.itemList = itemService.getItemList();
    }

    onDrop(ev) {
        ev.preventDefault();
        const x = ev.pageX - this.inventory.nativeElement.offsetLeft;
        const y = ev.pageY - this.inventory.nativeElement.offsetTop;
        this.itemService.setCoordsXY(this.itemService.dragItem, x, y);
        this.itemService.drag.isDragged = false;
    }

    onDragOver(ev) {
        ev.preventDefault();
    }
}