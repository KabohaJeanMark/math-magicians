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
    expect(result).toHaveProperty('total');
    expect(result.total).toBe('1');
  });

  test('should NOT give a wrong result when multiplying', () => {
    const result = Calculate({ total: 18, next: 6, operation: 'x' }, '=');
    expect(result.total === 1000).toBeFalsy();
  });
});
