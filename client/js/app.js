import * as React from 'react';
import * as ReactDOM from 'react-dom';

// this is actually a function, not a class in the traditional OOP sense
class ColorTool extends React.Component {
  // produces a react h1 html element and renders it to the screen with content 'Color Tool'
  render() {
    return React.createElement('h1', null, 'Color Tool');
  }
}

// finds the main element and adds the ColorTool element
ReactDOM.render(React.createElement(ColorTool), document.querySelector('main'));
