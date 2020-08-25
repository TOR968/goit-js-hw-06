class Car {
  // Write code under this line

  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }
  constructor(car) {
    (this.maxSpeed = car.maxSpeed),
      (this.speed = 0),
      (this.isOn = false),
      (this.distance = 0),
      (this._price = car.price);
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
  }
  accelerate(value) {
    let driveSpeed = this.speed + value;
    if (driveSpeed <= this.maxSpeed) {
      this.speed = driveSpeed;
    } else {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    let driveSpeed = this.speed - value;
    if (driveSpeed >= 0) {
      this.speed = driveSpeed;
    } else {
      this.speed = 0;
    }
    this.speed -= value;
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// ('maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000');

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
