import { animate, query, style, transition, trigger, state } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* => *, void => *', [
    style({ position: 'relative'}),
    query(':enter, :leave', [
      style({ position: 'absolute', top: 0, left: 0, width: '100%' })
    ], {optional: true}),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      animate('0.5s', style({ opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
      animate('0.5s', style({ opacity: 1 }))
    ], { optional: true })
  ])
])


