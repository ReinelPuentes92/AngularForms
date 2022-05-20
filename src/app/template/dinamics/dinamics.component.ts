import { Component } from '@angular/core';

interface Person {
  name :string;
  favorities: Favorite[];
}

interface Favorite {
  id: number;
  nameGame: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  newGame: string = '';

  person: Person = {
    name: 'Reinel',
    favorities: [
      {
        id: 1,
        nameGame: 'Gears'
      },
      {
        id: 2,
        nameGame: 'Fifa'
      },
      {
        id: 3,
        nameGame: 'Halo'
      }
    ]
  }

  save(){
    console.log();
  }

  trash(index: number){
    this.person.favorities.splice(index,1);
  }

  addGame(){
    const gameNew : Favorite = {
      id: this.person.favorities.length + 1,
      nameGame: this.newGame
    }

    this.person.favorities.push(gameNew);
    this.newGame = '';
  }

}
