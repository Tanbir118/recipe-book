import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-listener',
  templateUrl: './even-listener.component.html',
  styleUrls: ['./even-listener.component.css']
})
export class EvenListenerComponent {
  @Input() evenNumber = 0;
}
