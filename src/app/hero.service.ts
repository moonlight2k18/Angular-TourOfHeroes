import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { MessageService } from "./message.service";
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
  constructor(private messageServie: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
