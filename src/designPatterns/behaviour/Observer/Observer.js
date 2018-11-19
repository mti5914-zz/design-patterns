export class Observer {
  constructor() {
    this.number = 0;
  }

  update(number) {
    this.number = number;
    console.log('new number:', this.baseNumber * number);
  }
}

export class Observer1 extends Observer {
  constructor() {
    super();
    this.baseNumber = 10;
  }
}

export class Observer2 extends Observer {
  constructor() {
    super();
    this.baseNumber = 20;
  }
}
