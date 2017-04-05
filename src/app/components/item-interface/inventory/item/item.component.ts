import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ItemService} from '../../../../shared/services/item.service';
import {Observable} from 'rxjs';
import {StoreService} from '../../../../shared/services/store.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../shared/services/user.service';
@Component({
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent {
    @Input() item;
    private drag;
    private user;
    private searchInput: ElementRef;

    constructor(private itemService: ItemService,
                private storeService: StoreService,
                private route: ActivatedRoute,
                private userService: UserService) {
        this.drag = itemService.drag;
        this.route.params.subscribe(parameter => {
            this.user = this.userService.getUserById(parameter['id']);
        });
    }

    onRemove() {
        if (this.item.isBought) {
            this.itemService.toggleItem(this.item);
        } else {
            this.storeService.buyItem(this.item, this.user);
        }
    }

    onDragStart() {
        if (this.item.isBought) {
            setTimeout(() => {
                this.drag.isDragged = true;
            }, 0);

            this.itemService.dragItem = this.item;
        }
    }

    onDragEnd() {
        this.drag.isDragged = false;
    }

    getClass() {
        if (this.item.status) {
            return [this.item.styles.spriteClass, this.item.characterCoordsClass, this.item.itemImageBig];
        } else {
            return [this.item.styles.spriteClassMini, this.item.inventoryCoordsClass];
        }
    }

    getStyle() {
        let result = {};

        if (!this.item.status) {
            result['top'] = this.item.top + 'px';
            result['left'] = this.item.left + 'px';
            result['width'] = this.item.width + 'px';
            result['height'] = this.item.height + 'px';
        }

        if (this.item.opacity) {
            result['opacity'] = 0.3;
        }

        result['z-index'] = 20;
        if (this.itemService.drag.isDragged) {
            result['z-index'] = 1;
        }

        return result;
    }
}