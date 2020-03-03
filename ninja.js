class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log(`Name: ${this.name}`);
  }
  showStats() {
    console.log(
      `Name: ${this.name}; Strength: ${this.strength}; Speed: ${this.speed}; Health: ${this.health}`
    );
  }
  drinkSake() {
    this.health += 10;
    return `${this.name} now has ${this.health}.`;
  }
}

const ninja = new Ninja("Lilly", 14, 13, 8);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
