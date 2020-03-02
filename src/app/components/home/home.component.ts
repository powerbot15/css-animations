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

  public changeCoords(e, parent, el) {
    const coords = parent.getBoundingClientRect();
    el.style.top = (e.clientY - coords.top - 15) + 'px';
    el.style.left = (e.clientX - coords.left - 15) + 'px';
  }

}
