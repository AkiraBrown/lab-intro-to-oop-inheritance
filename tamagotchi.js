// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick || false;
    this.rehomed = rehomed || false;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {
    console.log(`My mood is: ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is: ${this.energy}`);
    console.log(`I am ${this.sick ? "" : "not"}`);
  }
  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log(`${this.name} refuse to medicate`);
      this.energy -= 1;
    }
  }
  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    } else if (this.energy <= 3) {
      this.energy--;
    } else {
      this.mood += 2;
      this.energy--;
      this.full--;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    if (!this.sick) {
      this.mood -= 2;
      this.full--;
      this.energy--;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }
  badGuardian() {
    if (this.energy <= 0) this.rehomed = true;
    if (this.mood <= 0) this.rehomed = true;
    if (this.full <= 0) this.rehomed = true;
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
