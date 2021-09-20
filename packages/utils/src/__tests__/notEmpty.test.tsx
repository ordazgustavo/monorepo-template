import { notEmpty } from '../notEmpty';

test('notEmpty', () => {
  const arr = [null, undefined, 1];

  const result = arr.filter(notEmpty);

  expect(result).toEqual([1]);
});
