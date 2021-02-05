export class AgeCalculator {
  constructor(age){
    this.age = age;
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
    let ageReturn = this.age/11.86;
    return Math.round(ageReturn);
  }
}