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
  test('should return "no planet selected" when no applicable planet is entered in life expectancy function', ()=> {
    expect(testObject.leOnPlanets("test")).toEqual("no planet selected")
  })
  test('should return life expectancy of Mercury based on a life expectancy of object, rounded to nearest integer', ()=>{
    expect(testObject.leOnPlanets("mercury")).toEqual(333)
  })
  test('should return life expectancy of Venus based on life expectancy of object, rounded to nearest integer',()=>{
    expect(testObject.leOnPlanets("venus")).toEqual(129)
  })
  test('should return life expectancy of Mercury based on life expectancy of object, rounded to nearest integer',()=>{
    expect(testObject.leOnPlanets("mars")).toEqual(43)
  })
  test('should return life expectancy of Jupiter based on life expectancy of object, rounded to nearest integer',()=>{
    expect(testObject.leOnPlanets("jupiter")).toEqual(7)
  })
test('should return string for surpassed life expectancy', ()=>{
    let lifeExpectancy = testObject.leOnPlanets("jupiter")
    expect(testObject.compareLE(lifeExpectancy)).toEqual("you lived 13 years over the life expectancy of this planet");
  })
  test('should return string for amount of years left compared planets life expectancy', ()=> {
    let lifeExpectancy = testObject.leOnPlanets("venus")
    expect(testObject.compareLE(lifeExpectancy)).toEqual("you have 109 years left to live on this planet");
  })
});