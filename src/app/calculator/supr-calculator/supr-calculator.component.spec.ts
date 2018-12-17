import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprCalculatorComponent } from './supr-calculator.component';

describe('SuprCalculatorComponent', () => {
  let component: SuprCalculatorComponent;
  let fixture: ComponentFixture<SuprCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuprCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
