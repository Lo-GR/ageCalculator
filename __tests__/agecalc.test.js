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

  test('should return age in Venus years based on age of object, rounded to nearest integer', () => {
    expect(testObject.venusAge()).toEqual(32)
  })

  test('should return age in Mars years based on age of object, rounded to the nearest integer', ()=>{
    expect(testObject.marsAge()).toEqual(11)
  })
});