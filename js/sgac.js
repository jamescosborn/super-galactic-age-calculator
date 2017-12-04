export class Age {
 constructor(yearsOld) {
   this.age = yearsOld;
 }

 ageToSeconds() {
   this.age * 31536000;
   return this.age;
 }
}
