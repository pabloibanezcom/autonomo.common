import { getEnumArray } from './enum';

enum MockEnum {
  PropA = 'propA',
  PropB = 'propB',
  PropC = 'propC'
}

describe('getEnumArray', () => {
  test('it returns an array from the enumeration', () => {
    const arr = getEnumArray(MockEnum);
    expect(arr).toEqual(['propA', 'propB', 'propC']);
  });
});
