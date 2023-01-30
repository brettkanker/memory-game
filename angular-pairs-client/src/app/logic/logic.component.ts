import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent {
  isActive = true;
  list : number[] = [
    1,
    2,
    3,
    4,
    5
  ]

  public onClick(){
    this.isActive = !this.isActive;
  }


}
