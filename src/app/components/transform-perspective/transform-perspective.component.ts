import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform-perspective',
  templateUrl: './transform-perspective.component.html',
  styleUrls: ['./transform-perspective.component.scss']
})
export class TransformPerspectiveComponent implements OnInit {

  public items = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}
