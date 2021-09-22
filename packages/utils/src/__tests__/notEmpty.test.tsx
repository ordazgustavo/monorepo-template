import { notEmpty } from '../notEmpty';

describe('notEmpty', () => {
  it('filters null and undefined values', () => {
    expect.hasAssertions();
    const valid = 1;
    const arr = [null, undefined, valid];

    const result = arr.filter(notEmpty);

    expect(result).toStrictEqual([valid]);
  });
});
