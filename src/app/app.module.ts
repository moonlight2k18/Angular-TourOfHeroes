import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeroesComponent, MessagesComponent],
  bootstrap: [AppComponent],
  providers: [MessageService, HeroService]
})
export class AppModule {}
