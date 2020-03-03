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
      `Name: ${this.name}; Health: ${this.health}; Speed: ${this.speed}; Strength: ${this.strength}`
    );
  }
  drinkSake() {
    this.health += 10;
    return `${this.name} now has ${this.health} health.`;
  }
}

// const ninja = new Ninja("Lilly", 14, 13, 8);
// ninja.sayName();
// ninja.showStats();
// ninja.drinkSake();

class Sensei extends Ninja {
  constructor(wisdom = 10) {
    super(wisdom, 200, 10, 10);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    super.drinkSake();
    console.log(
      `"Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path."
        ${this.name}'s health: ${this.health}`
    );
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.drinkSake();
superSensei.showStats();
