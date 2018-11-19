export class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notify(number) {
    this.observers.forEach((item) => {
      item.update(number);
    });
  }
}

export class Subject1 extends Subject {
  constructor() {
    super();
    this.number = 0;
  }

  changeRandomNumber() {
    this.number = Math.floor(Math.random() * 10);
    this.notify(this.number);
  }
}
