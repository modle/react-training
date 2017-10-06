import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    const colors = [
      { id: 1, name: 'red', hexCode: '#ff0000' },
      { id: 1, name: 'white', hexCode: '#ff0000' },
      { id: 1, name: 'blue', hexCode: '#ff0000' }
    ];
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li>{color.name}</li>)}
      </ul>
    </div >;
  }

}
