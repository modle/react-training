import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CarTool } from './components/car-tool';
import { ColorTool } from './components/color-tool';

const myCars = [
  { id: 1, make: 'Chevy', model: 'Cavalier', year: 1981, color: 'brown', price: 300},
  { id: 2, make: 'Lincoln', model: 'Futura', year: 1955, color: 'black', price: 999999}
];

const myColors = [
  { id: 1, name: 'red', hexCode: '#ff0000' },
  { id: 2, name: 'white', hexCode: '#ff0000' },
  { id: 3, name: 'blue', hexCode: '#ff0000' }
];

ReactDOM.render(<CarTool cars={myCars} />, document.querySelector('lab'));
ReactDOM.render(<ColorTool colors={myColors} />, document.querySelector('main'));
