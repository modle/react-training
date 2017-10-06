import * as React from 'react';

export class CarTool extends React.Component {

  render() {
    const cars = [
      { id: 1, make: 'Chevy', model: 'Cavalier', year: 1981, color: 'brown', price: 100 },
      { id: 1, make: 'Lincoln', model: 'Futura', year: 1955, color: 'black', price: NaN }
    ];

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
          {
            cars.map(car => <tr>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>)
          };
        </tbody>
      </table >
    </div >;
  }

}
