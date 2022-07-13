import _ from 'lodash';
import myName from './myName';
import './style.css';

function lodashExampleComponent() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function myModuleExampleComponent() {
    // Using my function!
    const nameElement = document.createElement('div');
    nameElement.textContent = myName('John Jacob Jingle-Hiemer Schmidt');
    nameElement.classList.add('hello');
    return nameElement;
}

document.body.appendChild(lodashExampleComponent());
document.body.append(myModuleExampleComponent());