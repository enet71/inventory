import {Directive, ElementRef, HostListener, Input, Renderer, OnInit} from '@angular/core';
@Directive({
    selector: '[my-tooltip]',
})

export class TooltipDirective implements OnInit {
    @Input('my-tooltip') tooltip;
    @Input() agility;
    @Input() strength;
    @Input() intelligence;
    @Input() price;
    @Input() itemValue;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
        if (this.tooltip) {
        }
    }

    ngOnInit(): void {
        this.tooltip.style.display = 'none';
        this.tooltip.style.zIndex = '99999';
        this.tooltip.style.position = 'absolute';
        this.tooltip.style.padding = '10px';
        this.tooltip.style.backgroundColor = '#131313';
        this.tooltip.style.color = '#295ebb';
        this.tooltip.style.border = 'solid 1px #FF961F';
        this.tooltip.classList.add('tooltip');
        this.agility ? this.createAttribute('Agility', this.agility) : '';
        this.strength ? this.createAttribute('Strength', this.strength) : '';
        this.intelligence ? this.createAttribute('Intelligence', this.intelligence) : '';
        this.price ? this.createAttribute('Price', this.price) : '';
        this.itemValue ? this.createAttribute('Body part', this.itemValue) : '';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.tooltip.style.top = this.getCssProperty(this.elementRef.nativeElement, 'top');
        this.tooltip.style.left = parseInt(this.getCssProperty(this.elementRef.nativeElement, 'left')) + 50 + 'px';
        this.tooltip.style.display = 'block';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.tooltip.style.display = 'none';
    }

    createAttribute(name, value) {
        let div = document.createElement('div');
        div.innerHTML = `${name}: ${value}`;
        this.tooltip.appendChild(div);
    }

    getCssProperty(element, property) {
        return window.getComputedStyle(element, null).getPropertyValue(property);
    }
}
