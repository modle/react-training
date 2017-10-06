import * as React from 'react';
// ReactDOM not needed in the component; it is included from app.js

// this is actually a function, not a class in the traditional OOP sense
// export creates a named export, which allows importing from another js file
export class ColorTool extends React.Component {

  // produces a react h1 html element and renders it to the screen with content 'Color Tool'
  // this is not HTML or a string of HTML
  // do not think of this as a string of HTML
  // it is xml-compliant code that will get converted to React.createElement...
  render() {
    return <h1>Color Tool</h1>;
  }

}
