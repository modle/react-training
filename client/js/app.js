import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CarTool } from './components/car-tool';
import { ColorTool } from './components/color-tool';

const myCars = [
  { id: 1, make: 'Chevy', model: 'Cavalier', color: 'brown' },
  { id: 2, make: 'Lincoln', model: 'Futura', color: 'black' }
];

const myColors = [
  { id: 1, name: 'red', hexCode: '#ff0000' },
  { id: 2, name: 'white', hexCode: '#ff0000' },
  { id: 3, name: 'blue', hexCode: '#ff0000' }
];


ReactDOM.render(<CarTool cars={myCars} />, document.querySelector('lab'));
ReactDOM.render(<ColorTool colors={myColors} />, document.querySelector('main'));
