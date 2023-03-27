import { ReplaySubject } from 'rxjs';
import { Cards } from './../../assets/cards/cards';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardsPerArtist } from './cards-per-artist';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public playcards = new ReplaySubject<CardsPerArtist>();

  private allFiles: Array<string> = [];

  public constructor(private http: HttpClient) {
    this.http.get('assets/cards/cards.json').subscribe((allCards) => {
      console.log(allCards)
      const cards = allCards as Cards;
      this.allFiles = cards.files;
      this.updatePlayCards();
    })
  }

  private updatePlayCards(): void {
    const allCards:CardsPerArtist = {};

    this.allFiles.forEach((filepath: string) => {
      const artist = filepath.split(' (')[0];
      if (!allCards[artist]) {
        allCards[artist] = [];
      }

      allCards[artist].push('./assets/cards/' + filepath);
    });

    this.playcards.next(allCards);
  }
}
