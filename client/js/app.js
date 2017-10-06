import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { CarTool } from './components/car-tool';

// const myCars = [
//   { id: 1, make: 'Chevy', model: 'Cavalier', year: 1981, color: 'brown', price: 100 },
//   { id: 1, make: 'Lincoln', model: 'Futura', year: 1955, color: 'black', price: NaN }
// ];

// ReactDOM.render(<CarTool cars={myCars} />, document.querySelector('lab'));


import { ColorTool } from './components/color-tool';

const myColors = [
  { id: 1, name: 'red', hexCode: '#ff0000' },
  { id: 1, name: 'white', hexCode: '#ff0000' },
  { id: 1, name: 'blue', hexCode: '#ff0000' }
];

ReactDOM.render(<ColorTool colors={myColors} />, document.querySelector('main'));
