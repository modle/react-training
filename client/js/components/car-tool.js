import * as React from 'react';

export class CarTool extends React.Component {

  render() {
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <table border="1px">
        <thead>
          <tr>
            <th>id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chevy</td>
            <td>Cavalier</td>
            <td>1981</td>
            <td>Brown</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lincoln</td>
            <td>Futura</td>
            <td>1955</td>
            <td>Black</td>
            <td>NaN</td>
          </tr>
        </tbody>
      </table >
    </div >;
  }

}
