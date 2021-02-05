export class AgeCalculator {
  constructor(age){
    this.age = age;
  }
  mercuryAge(){
    let ageReturn = this.age/.24;
    return Math.round(ageReturn);
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