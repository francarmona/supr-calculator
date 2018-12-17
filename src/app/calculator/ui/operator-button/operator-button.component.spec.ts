import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorButtonComponent } from './operator-button.component';

describe('OperatorButtonComponent', () => {
  let component: OperatorButtonComponent;
  let fixture: ComponentFixture<OperatorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
