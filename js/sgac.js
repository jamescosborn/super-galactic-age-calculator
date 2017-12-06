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

  marsAge() {
    let newAge = this.age * 1.88;
    return newAge;
    }

  jupiterAge() {
    let newAge = this.age * 11.86;
    return newAge;
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
