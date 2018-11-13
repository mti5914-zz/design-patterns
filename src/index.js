import { random } from 'lodash/fp';

import './style.css';
import pic from './sasuke_chibi.png';
import printMe from './print.js';

console.log('hello world, number:', random(0, 9));
printMe();

var myPic = new Image();
myPic.src = pic;
document.body.appendChild(myPic);