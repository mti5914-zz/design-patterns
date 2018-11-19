import { Singleton } from './Singleton';

let obj1, obj2;
setTimeout(() => {
  obj1 = Singleton.getInstance();
}, 0);
setTimeout(() => {
  obj2 = Singleton.getInstance();
}, 0);
setTimeout(() => {
  console.log(obj1 === obj2);
  console.log(obj1);
}, 2);
