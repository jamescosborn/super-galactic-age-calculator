import { Age } from "./../js/sgac.js";

describe('ageToSeconds', function() {
  it('should turn age in years into seconds', function () {
    const age = new Age(2);
    expect(age.ageToSeconds()).toEqual(63072000)
  })
})

describe('mercuryAge', function() {
  it('should turn Earth years into Mercury years', function () {
    const age = new Age(7);
    expect(age.mercuryRising()).toEqual(1.68)
  })
})

describe('venusAge', function() {
  it('should turn Earth years into Venus years', function () {
    const age = new Age(7);
    expect(age.venusAge()).toEqual(4.34)
  })
})

describe('marsAge', function() {
  it('should turn Earth years into Mars years', function () {
    const age = new Age(7);
    expect(age.marsAge()).toEqual(13.16)
  })
})

describe('jupiterAge', function() {
  it('should turn Earth years into Jupiter years', function () {
    const age = new Age(7);
    expect(age.jupiterAge()).toEqual(83.02)
  })
})
