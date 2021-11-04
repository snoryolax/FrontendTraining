import getRandomElement from './animals';
import { Animals, Dog } from './animals';

console.log(Animals);
console.log(Dog);
console.log(`Random Animal: ${getRandomElement(Animals)}`);

const body = document.getElementsByTagName('h1');
body[0]!.insertAdjacentHTML('afterend', `<p>${getRandomElement(Animals)}</p>`);
