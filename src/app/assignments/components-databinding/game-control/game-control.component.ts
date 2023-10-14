import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {
  timeInvoked: boolean = false;
  timeOut: NodeJS.Timer;
  count = 0;
  @Output() myEmitter = new EventEmitter<number>();

  start() {
    if(!this.timeInvoked) {
      this.timeInvoked = true;

      this.timeOut = setInterval(() => {
        this.count++;
        this.myEmitter.emit(this.count);
      }, 1000);
    }
  }

  stop() {
    if(this.timeInvoked) {
      this.timeInvoked = false;
      clearInterval(this.timeOut);
    }
  }
}
