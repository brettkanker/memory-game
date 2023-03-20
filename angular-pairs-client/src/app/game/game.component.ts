import { CardsPerArtist } from './CardsPerArtist';
import { CardsService } from './cards.service';
import { Component, OnInit } from '@angular/core';
import { CardPair } from './card/card-pair';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{
  public currentCards: Array<CardPair> = [];

  constructor(private cardservice: CardsService){}
  ngOnInit(): void {
    console.log(this.cardservice.playcards)
    this.cardservice.playcards.subscribe((cardsPerArtist: CardsPerArtist) => {
      let keys = Object.keys(cardsPerArtist);
      keys = keys.slice(0, 10);

      for (const key of keys) {
        const images = cardsPerArtist[key];
        const entry1 = images.pop();
        const entry2 = images.pop();

        if(entry1 && entry2) {
          this.currentCards.push(this.getCard(key, entry1));
          this.currentCards.push(this.getCard(key, entry2));
        }
      }
    })
  }

  private getCard(artist: string, imagePath: string) : CardPair {
    return {
      authorName: artist,
      imagePath: imagePath
    }
  }

}
