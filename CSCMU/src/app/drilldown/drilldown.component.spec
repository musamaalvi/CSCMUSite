import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldowmComponent } from './drilldowm.component';

describe('DrilldowmComponent', () => {
  let component: DrilldowmComponent;
  let fixture: ComponentFixture<DrilldowmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldowmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldowmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
