import { Component} from '@angular/core';
import { OnInit}    from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  
  //decalring heroes empty array
  heroes: Hero[];
  
  selectedHero: Hero;

  //consructor's parameter that creates some private method/process
  constructor(
    private heroService: HeroService,
    private router: Router) { }

  //ngOnInit method always initializes when project starts
  //this time it calls the "getHeroes()" method right below
  ngOnInit(): void {
    this.getHeroes();
  }

  //the method that has been called via ngOnInit above
  //it calls the getHeroes method from "hero.service.ts" file
  getHeroes(): void {
  this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
  //adding some hero method which calls the "hero.service.ts" file's method
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  
  //deleting some hero method which calls the "hero.service.ts" file's method
  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

}