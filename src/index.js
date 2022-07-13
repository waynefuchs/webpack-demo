// Lodash
import _ from 'lodash';

// My Module Test
import myName from './myName';

// Import Style
import './style.css';

// Image Test
import Icon from './icon.png';

// Import Data
import Data from './data.xml';
import Notes from './data.csv';



// Lodash Example
function lodashExampleComponent() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

// An example using my module
function myModuleExampleComponent() {
    const nameElement = document.createElement('div');
    nameElement.textContent = myName('John Jacob Jingle-Hiemer Schmidt');
    nameElement.classList.add('hello');

    // This is code that will insert the image as a child in this div. (as per the tutorial)    
    const myIcon = new Image();
    myIcon.src = Icon;
    nameElement.appendChild(myIcon);

    return nameElement;
}

// Put the loaded data into the console
function sendDataToConsole() {
  console.log(Data);
  console.table(Notes);
}

document.body.appendChild(lodashExampleComponent());
document.body.append(myModuleExampleComponent());
sendDataToConsole();