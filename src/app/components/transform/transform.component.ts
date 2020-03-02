import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})
export class TransformComponent implements OnInit {

  public translated = false;
  public rotated = false;
  public scaled = false;
  public skewed = false;

  constructor() { }

  ngOnInit() {
  }

  public startAnimation(property: string) {
    this[property] = true;
    setTimeout(() => {
      this[property] = false;
    }, 600);
  }

}
