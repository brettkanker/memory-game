import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public customColor = '';
  @Output() public boxColor: EventEmitter<string> = new EventEmitter();

  public defaultColor: string = '#6cdeb8';

  public sendEvent(): void {
    this.boxColor.emit(
      this.customColor.length > 0 ? this.customColor : this.defaultColor
    );
  }
}
