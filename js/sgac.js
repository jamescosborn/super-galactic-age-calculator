export class Age {
 constructor(yearsOld) {
   this.age = yearsOld;
 }

 ageToSeconds() {
   let newAge = this.age * 31536000;
   return newAge;
 }

 mercuryRising() {
   let newAge = this.age * .24;
   return newAge;
 }

 venusAge() {
   let newAge = this.age * .62;
   return newAge;
 }

 marsAge() {
   let newAge = this.age * 1.88;
   return newAge;
 }

 jupiterAge() {
   let newAge = this.age * 11.86;
   return newAge;
 }
}
