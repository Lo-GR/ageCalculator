import {AgeCalculator} from '../src/js/agecalc.js';

describe('AgeCalculator', () => {

  beforeEach(() => {
    testObject = new AgeCalculator(20);
  });

  test('should construct an object with age properties entered', () => {
    expect(testObject.age).toEqual(20);

  });

});