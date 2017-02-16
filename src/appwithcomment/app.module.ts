import { NgModule }      from '@angular/core';
//added for two way bindings( FormsModule )
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
//importing the file
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
