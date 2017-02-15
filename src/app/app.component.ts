import { Component } from '@angular/core';
//importing the hero.ts file
import { Hero } from './hero';
//single hero class with properties
import { HeroService } from './hero.service';
//imported new module
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <!-- from imported 'hero' and angular way to use template from other file
    the HeroDetailComponent should receive the hero from the AppComponent and
    display that hero's detail beneath the list -->
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  //style css section
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService]
})

// the class of app component, data will be passsed from here
export class AppComponent{
  //can also be used from here
  title = "Tour Of Heroes";
  //arraay of some heroes
  //heroes = HEROES;
  //after the hero service
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

   /* before using promise
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
