import { TestBed } from '@angular/core/testing';

import { MathExpressionService } from './math-expression.service';

describe('MathExpressionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathExpressionService = TestBed.get(MathExpressionService);
    expect(service).toBeTruthy();
  });

  it('#valid should check if valid expression', () => {
    const service: MathExpressionService = TestBed.get(MathExpressionService);
    expect(service.valid('3+2+4')).toBe(true);
    expect(service.valid('+2')).toBe(true);
    expect(service.valid('sin(30) + cos(20)')).toBe(true);
    expect(service.valid('sin(30')).toBe(false);
    expect(service.valid('3++')).toBe(false);
  });

  it('#evaluate should check if valid expression', () => {
    const service: MathExpressionService = TestBed.get(MathExpressionService);
    expect(service.evaluate('3+2+4')).toBe(9);
    expect(service.evaluate('+2')).toBe(2);
    expect(service.evaluate('sin(30) + cos(20)')).toBeCloseTo(-0.58);
  });
});
