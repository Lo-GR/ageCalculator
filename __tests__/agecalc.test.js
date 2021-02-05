import {AgeCalculator} from '../src/js/agecalc.js';

describe('AgeCalculator', () => {
  let testObject;
  beforeEach(() => {
    testObject = new AgeCalculator(20, 80);
  });
  test('should construct an object with age properties entered', () => {
    expect(testObject.age).toEqual(20);
  });
  test('should construct an object with life expectancy property entered', ()=> {
    expect(testObject.lifeExpectancy).toEqual(80);
  })
  test('should return age in Mercury years based on age of object, rounded to nearest integer', () => {
    expect(testObject.mercuryAge()).toEqual(83)
  })
  test('should return age in Venus years based on age of object, rounded to nearest integer', () => {
    expect(testObject.venusAge()).toEqual(32)
  })
  test('should return age in Mars years based on age of object, rounded to the nearest integer', ()=>{
    expect(testObject.marsAge()).toEqual(11)
  })
  test('should return age in Jupiter years based on age of object, rounded to nearest integer', ()=>{
    expect(testObject.jupiterAge()).toEqual(2)
  })

  test('should return life expectancy of Mercury based on a life expectancy of object, rounded to nearest integer', ()=>{
    expect(testObject.leOnPlanets("mercury")).toEqual(333)
  })
});