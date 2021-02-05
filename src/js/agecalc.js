export class AgeCalculator {
  constructor(age){
    this.age = age;
  }
  mercuryAge(){
    return Math.round(this.age/.24);
  }
  venusAge(){
    let ageReturn = this.age/.62;
    return Math.round(ageReturn);
  }
  marsAge(){
    let ageReturn = this.age/1.88;
    return Math.round(ageReturn);
  }
  jupiterAge(){
    let ageReturn = this.age/11.86;
    return Math.round(ageReturn);
  }
}