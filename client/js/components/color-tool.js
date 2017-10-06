import * as React from 'react';
// ReactDOM not needed in the component; it is included from app.js

// this is actually a function, not a class in the traditional OOP sense
// export creates a named export, which allows importing from another js file
export class ColorTool extends React.Component {

  // produces a react h1 html element and renders it to the screen with content 'Color Tool'
  render() {
    return React.createElement('h1', null, 'Color Tool');
  }

}
