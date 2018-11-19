import { Subject1 } from './Subject';
import { Observer1, Observer2 } from './Observer';

const subject1 = new Subject1();
const observer1 = new Observer1();
const observer2 = new Observer2();
subject1.subscribe(observer1);
subject1.subscribe(observer2);

subject1.changeRandomNumber();
subject1.unsubscribe(observer1);
subject1.changeRandomNumber();
