import { Injectable } from '@angular/core';
import { Hero } from './hero';
//used this for importing hero array data from "mock-heroes" file
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  /*
  getHeroes(): Hero[] {
    return HEROES;
  } */

  //used promise
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
