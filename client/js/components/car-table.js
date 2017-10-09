import * as React from 'react';
import { CarViewRow } from './car-view-row';
import { CarEditRow } from './car-edit-row';

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
            car => 
            {
              if (car.edit) {
                return <CarEditRow key={car.id} car={car}
                  onFlipEditFlag={this.props.onFlipEditFlag}
                  onSaveEditedCar={this.props.onSaveEditedCar} />;
              } else {
                return <CarViewRow key={car.id} car={car}
                  onDeleteCar={this.props.onDeleteCar}
                  onFlipEditFlag={this.props.onFlipEditFlag} />;
              }
            }
          )
        }        
      </tbody>
    </table>;
  }
}
