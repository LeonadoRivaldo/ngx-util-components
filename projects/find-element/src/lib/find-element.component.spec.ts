import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindElementComponent } from './find-element.component';

describe('FindElementComponent', () => {
  let component: FindElementComponent;
  let fixture: ComponentFixture<FindElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
