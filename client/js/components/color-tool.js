import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    const colors = ['red', 'white', 'blue'];

    const colorListItems = [];

    // function called for each element of the list
    // {} syntax allows for javascript expressions inside the jsx
    colors.forEach(function (color) {
      colorListItems.push(<li>{color}</li>)
    });
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
    </div>;
  }

}
