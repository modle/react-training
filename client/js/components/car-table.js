import * as React from 'react';
import { CarRow } from './car-row';

export class CarTable extends React.Component {

  render() {
    const cars = this.props.cars;
    return <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          cars.map(
            car => <CarRow key={car.id} car={car} onDeleteCar={this.props.onDeleteCar} onEditCar={this.props.onEditCar} />
          )
        }
        
      </tbody>
    </table>;
  }
}
