import * as React from 'react';

export class CarTool extends React.Component {

  render() {
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <table border="1px">
        <tr>
          <th>id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Chevy</td>
          <td>Cavalier</td>
          <td>1981</td>
          <td>Brown with grey doors</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Pontiac</td>
          <td>Grand Prix</td>
          <td>1990</td>
          <td>Rusted-out blue</td>
          <td>300</td>
        </tr>
      </table >
    </div >;
  }

}
