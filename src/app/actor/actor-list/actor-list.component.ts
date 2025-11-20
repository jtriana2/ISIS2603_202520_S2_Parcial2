import { Component, Input } from '@angular/core';
import { Actor } from '../Actor';

@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css',
})
export class ActorListComponent {
  @Input() actors: Actor[] = [];
  @Input() actorWithMostMovies: Actor | null = null;
  
  constructor() {}

  isActorWithMostMovies(actor: Actor): boolean {
    return this.actorWithMostMovies !== null && 
           this.actorWithMostMovies.nombre === actor.nombre;
  }
}
