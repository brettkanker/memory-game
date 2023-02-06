import { GameComponent } from './game/game.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'game', component: GameComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
