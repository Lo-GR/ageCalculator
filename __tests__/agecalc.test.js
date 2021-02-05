import {AgeCalculator} from '../src/js/agecalc.js';

describe('AgeCalculator', () => {
  let testObject;
  beforeEach(() => {
    testObject = new AgeCalculator(20);
  });

  test('should construct an object with age properties entered', () => {
    expect(testObject.age).toEqual(20);
  });

  test('should return age in Mercury years based on age of object, rounded to nearest integer', () => {
    expect(testObject.mercuryAge()).toEqual(83)
  })
});