import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})

export class BasicsComponent {
  userName = 'Md Arefin';
  clickedCountArray : number[] = [];
  clickedCount = 0;

  public resetName()
  {
    this.userName = '';
  }

  public increaseCount()
  {
    this.clickedCount++;
    this.clickedCountArray.push(this.clickedCount);
  }

  public getColor(count: number)
  {
    return (count >= 5) ? 'blue' : 'transparent';
  }

  public setTextColor(count: number)
  {
    return (count >= 5) ? true : false;
  }
}
