import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-test-component]',
  templateUrl: 'testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})

export class TestComponentComponent {
  @Input() message: string = "Welcome!";
}
