import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements AfterViewInit {

  public animate = false;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => { this.animate = true; }, 0);
  }
}
