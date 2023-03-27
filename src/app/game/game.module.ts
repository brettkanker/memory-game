import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameComponent,
    CardComponent
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
