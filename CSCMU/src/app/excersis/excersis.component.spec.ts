import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcersisComponent } from './excersis.component';

describe('ExcersisComponent', () => {
  let component: ExcersisComponent;
  let fixture: ComponentFixture<ExcersisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcersisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcersisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
