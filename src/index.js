import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function anotherComponent() {
    // Using my function!
    const moo = document.createElement('div');
    moo.textContent = myName('Wayne');
    return moo;
}

document.body.appendChild(component());
document.body.append(anotherComponent());