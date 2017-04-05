import {trigger, state, style, transition, animate, keyframes} from '@angular/core';
export const animations = [
    trigger('hero', [
        state('0', style({})),
        state('1', style({})),
        state('2', style({})),
        state('3', style({})),
        state('4', style({})),
        state('5', style({})),
        state('6', style({})),
        state('7', style({})),
        state('8', style({})),
        state('9', style({})),
        state('10', style({})),
        state('11', style({})),
        state('12', style({})),
        state('13', style({})),
        state('14', style({})),
        state('15', style({})),
        state('16', style({})),
        state('17', style({})),

        transition('* => 0', [
            animate(300, keyframes([
                style({transform: 'translateX(350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 1', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 2', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(700px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 3', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})

            ]))
        ]),
        transition('* => 4', [
            animate(300, keyframes([
                style({transform: 'translateX(350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 5', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 6', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(-700px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 7', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 8', [
            animate(300, keyframes([
                style({transform: 'translateX(350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 9', [
            animate(300, keyframes([
                style({transform: 'translateX(-350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 10', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 11', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(700px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 12', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})

            ]))
        ]),
        transition('* => 13', [
            animate(300, keyframes([
                style({transform: 'translateX(-350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 14', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 15', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(-700px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 16', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 17', [
            animate(300, keyframes([
                style({transform: 'translateX(-350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ])
    ])
];