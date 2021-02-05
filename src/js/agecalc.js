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
  
}