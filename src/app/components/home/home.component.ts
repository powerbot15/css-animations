import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  public animate = false;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => { this.animate = true; }, 0);
  }

}
