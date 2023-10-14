import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-listener',
  templateUrl: './odd-listener.component.html',
  styleUrls: ['./odd-listener.component.css']
})
export class OddListenerComponent {
  @Input() oddNumber = 0;
}
