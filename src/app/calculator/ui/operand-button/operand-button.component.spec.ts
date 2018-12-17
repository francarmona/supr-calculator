import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperandButtonComponent } from './operand-button.component';

describe('OperandButtonComponent', () => {
  let component: OperandButtonComponent;
  let fixture: ComponentFixture<OperandButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperandButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
