import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformPerspectiveComponent } from './transform-perspective.component';

describe('TransformPerspectiveComponent', () => {
  let component: TransformPerspectiveComponent;
  let fixture: ComponentFixture<TransformPerspectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformPerspectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
