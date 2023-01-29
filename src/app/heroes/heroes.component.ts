import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}

  selectedHero?: Hero;

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name:string): void {
    name = name.trim();
    if (!name) { return };
    this.heroService.addHero({ name } as Hero)
    .subscribe((hero: Hero): void => {
      this.heroes.push(hero)
    })
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
