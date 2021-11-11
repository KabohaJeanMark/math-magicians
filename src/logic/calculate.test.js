/* eslint-disable no-unused-expressions */
import Calculate from './calculate';

test('should clear display if AC is clicked', () => {
  const result = Calculate({ total: 10, next: 2, operation: '-' }, 'AC');
  expect(result).toHaveProperty('total');
  expect(result.total).toBe('');
});
