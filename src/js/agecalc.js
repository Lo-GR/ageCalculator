export class AgeCalculator {
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  mercuryAge(){
    return Math.round(this.age/.24);
  }
  venusAge(){
    return Math.round(this.age/.62);
  }
  marsAge(){
    return Math.round(this.age/1.88);
  }
  jupiterAge(){
    return Math.round(this.age/11.86);
  }
  leOnPlanets(planet){
    if (planet = "venus"){
      return Math.round(this.lifeExpectancy/.24);
    } else {
      return "no planet selected";
    }
  }
}