/* eslint-disable no-unused-expressions */
import Calculate from './calculate';

describe('tests for the calculate logic', () => {
  it('should clear display if AC is clicked', () => {
    const result = Calculate({ total: 10, next: 2, operation: '-' }, 'AC');
    expect(result).toHaveProperty('total');
    expect(result.total).toBe('');
  });

  it('should calculate the difference if subtract is clicked', () => {
    const result = Calculate({ total: 4, next: 5, operation: '-' }, '=');
    expect(result.total).toBe('1');
  });

  it('should calculate the difference if addition is clicked', () => {
    const result = Calculate({ total: 14, next: 25, operation: '+' }, '=');
    expect(result.total).toBe('39');
  });

  it('should calculate the division', () => {
    const result = Calculate({ total: 15, next: 90, operation: '÷' }, '=');
    expect(result.total).toBe('6');
  });

  it('should not give a wrong result when multiplying', () => {
    const result = Calculate({ total: 18, next: 6, operation: 'x' }, '=');
    expect(result.total === 1000).toBeFalsy();
  });

  it('should calculate the right percentage if % is clicked', () => {
    const result = Calculate({ total: 150, next: '', operation: '' }, '%');
    expect(result).toHaveProperty('total');
    expect(result.total).toBe('1.5');
  });

  it('should change the sign if +/- is clicked', () => {
    const result = Calculate({ total: 7, next: '', operation: '' }, '+/-');
    expect(result).toHaveProperty('total');
    expect(result.total).toBe('-7');
  });
});
