// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  // Add code here
  constructor(name) {
    this.name = name;
    this.species = "cat";
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
  sleep = (sleepTime) => {
    this.tiredness = this.tiredness - sleepTime * 5;
    this.happiness = this.happiness + sleepTime / 3;
  };
  eat = (kibbles) => {
    this.hunger = this.hunger - kibbles / 5;
    this.happiness = this.happiness + kibbles / 10;
  };
  play = (playTime) => {
    this.loneliness = this.loneliness - 3 * playTime;
    this.happiness = this.happiness + playTime * 6;
  };
  wait = (waitTime) => {
    this.tiredness = this.tiredness + waitTime / 5;
    this.hunger = this.hunger + waitTime / 4;
    this.loneliness = this.loneliness + waitTime / 4;
    this.happiness = this.happiness - waitTime / 4;
  };
}

let boots = new Cat("boots");
boots.breed = "Simaese cat";
boots.sleep(3);
boots.play(10);
boots.eat(40);
boots.wait(20);

console.log(boots);
