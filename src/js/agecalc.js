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
    if (planet === "mercury"){
      return Math.round(this.lifeExpectancy/.24);
    } else if(planet === "venus") {
      return Math.round(this.lifeExpectancy/.62);
    }else if(planet === "mars") {
      return Math.round(this.lifeExpectancy/1.88);
    }else if(planet === "jupiter") {
      return Math.round(this.lifeExpectancy/11.86);
    }else {
      return "no planet selected";
    }
  }
  compareLE(lifeExpectancy){
    if(lifeExpectancy > this.age){
      return `you have ${lifeExpectancy-this.age} years left to live on this planet`
    }else {
      return `you lived ${this.age - lifeExpectancy} years over the life expectancy of this planet`;
    }
  }
}