import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    const colors = ['red', 'white', 'blue'];

    // function called for each element of the list
    // {} syntax allows for javascript expressions inside the jsx
    // map is a transformation function; 
    //   takes original array, 
    //   performs the function operation on each element, 
    //   and returns the new array
    const colorListItems = colors.map(
      color => <li>{color}</li>
    );
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
    </div >;
  }

}
