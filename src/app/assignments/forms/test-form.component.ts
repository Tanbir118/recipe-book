import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  defaultSubscription = 2;
  @ViewChild('form') form: NgForm;

  onSubmit(): void {
    console.log(this.form.value);
    this.form.reset();
  }
}
