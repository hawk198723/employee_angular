import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  public currentCount = 0;
  constructor() {}
  ngOnInit() {}
  public incrementCounter() {
    this.currentCount++;
  }
}
