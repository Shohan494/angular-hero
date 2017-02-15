import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  //with an input, one way binding, means the value change does not reflect anywhere else
  selector: 'my-app',
  // the view, data will be shown here
  template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input value="{{hero.name}}" placeholder="name">
    </div>
    `})

// the class of app component, data will be passsed from here
export class AppComponent{
  //title = "Tour Of Heroes";
  //name = 'Windstorm';

  hero: Hero = {
    id: 1,
    name: 'Windstorm The Saviour'
  };
}
