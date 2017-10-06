import * as React from 'react';

export class CarTool extends React.Component {

  render() {

    return <div>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table border="1px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cars.map(
              car => <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>{car.price}</td>
              </tr>
            )
          }
        </tbody>
      </table >
    </div >;
  }

}
