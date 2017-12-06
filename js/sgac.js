export class Age {
  constructor(yearsOld) {
    this.age = yearsOld;
  }

  ageToSeconds() {
    let newAge = this.age * 31536000;
    return newAge;
    }

  earthYearsLeft() {
    let yearsLeft = 79 - this.age;
    if (this.age > 79) {
      alert("You have surpassed Earth's life expectency. Congratulations.");
    }
    return yearsLeft;
  }

  mercuryRising() {
    let newAge = this.age * .24;
    return newAge;
  }

  mercuryYearsLeft() {
    let newAge = this.age * .24;
    let expectancy = 79 * .24;
    let yearsLeft = expectancy - newAge;
    return yearsLeft;
  }

  venusAge() {
    let newAge = this.age * .62;
    return newAge;
  }

  venusYearsLeft() {
    let newAge = this.age * .62;
    let expectancy = 79 * .62;
    let yearsLeft = expectancy - newAge;
    return yearsLeft;
  }

  marsAge() {
    let newAge = this.age * 1.88;
    return newAge;
  }

  marsYearsLeft() {
    let newAge = this.age * 1.88;
    let expectancy = 79 * 1.88;
    let yearsLeft = expectancy - newAge;
    return yearsLeft;
  }

  jupiterAge() {
    let newAge = this.age * 11.86;
    return newAge;
  }


  jupiterYearsLeft() {
    let newAge = this.age * 11.86;
    let expectancy = 79 * 11.86;
    let yearsLeft = expectancy - newAge;
    return yearsLeft;
  }
}

export class BirthYear {
  constructor(birthyear) {
    this.birthyear = birthyear;
  }

  bornSecondsAgo() {
    let newAge = 2017 - this.birthyear;
    let secondsOld = newAge * 31536000;
    return secondsOld;
  }
}
