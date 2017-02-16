import { Component, Input } from '@angular/core';
//importing the hero.ts file
import { Hero } from './hero';

@Component({
  //this has been used in "app.component.ts" template
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
