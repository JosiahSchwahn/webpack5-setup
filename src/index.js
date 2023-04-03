import _loadDash from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import Notes from './data.csv';


// import your function
import myName from './myName';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // use your function!
  element.textContent = myName('Josiah Schwahn');
  element.classList.add('hello');


  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn)
  
  //logs of csv and data.xml, imported from adding our webpack config and import statement above
  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());