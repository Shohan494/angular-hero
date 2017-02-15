import { Component } from '@angular/core';

export class Hero {
  id: number;
  title: string;
  name: string;
}

@Component({
  //with an input, one way binding, means the value change does not reflect anywhere else
  selector: 'my-app',
  // the view, data will be shown here
  template:`
    <h1>{{hero.title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <!--update the template to use the ngModel built-in directive for two-way binding.-->
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `})

// the class of app component, data will be passsed from here
export class AppComponent{
  //title = "Tour Of Heroes";
  //name = 'Windstorm';

  hero: Hero = {
    id: 1,
    title: "Tour of Heroes",
    name: 'Windstorm The Saviour'
  };
}
