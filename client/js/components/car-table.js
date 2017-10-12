/* eslint react/prop-types: 0 */
import * as React from 'react';
import { CarViewRow } from './car-view-row';
import { CarEditRow } from './car-edit-row';
import { CarForm } from './car-form';

export class CarTable extends React.Component {

  by = (fieldName, isAscending = true) => {
    const reverseMutliplier = isAscending ? 1 : -1;
    return function (o, p) {
      let a, b;
      let result;
      if (o && p && typeof o === 'object' && typeof p === 'object') {
        a = o[fieldName];
        b = p[fieldName];
        if (typeof a === typeof b) {
          result = a < b ? -1 : 1;
        } else {
          result = typeof a < typeof b ? -1 : 1;
        }
        return result * reverseMutliplier;
      } else {
        throw {
          fieldName: 'Error',
          message: 'Expected an object when sorting by ' + fieldName
        };
      }
    };
  };

  render() {
    const cars = this.props.cars.sort(this.by(this.props.sortField, this.props.sortAscending));
    console.log('sort ascending:', this.props.sortAscending, '| sort field:', this.props.sortField);
    return <table>
      <thead>
        <tr>
          <th onClick={() => this.props.onSort('id')}>Id</th>
          <th onClick={() => this.props.onSort('make')}>Make</th>
          <th onClick={() => this.props.onSort('model')}>Model</th>
          <th onClick={() => this.props.onSort('year')}>Year</th>
          <th onClick={() => this.props.onSort('color')}>Color</th>
          <th onClick={() => this.props.onSort('price')}>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          cars.map(
            car => 
            {return this.props.editCarId === car.id
              ? <CarEditRow key={car.id} car={car} onCancelCarEdit={this.props.onCancelCarEdit} onSaveEditedCar={this.props.onSaveEditedCar} />
              : <CarViewRow key={car.id} car={car} onDeleteCar={this.props.onDeleteCar} onEditCar={this.props.onEditCar} />;
            }
          )
        }
        <CarForm cars={this.props.cars} onSaveCar={this.props.onSaveCar} />
      </tbody>
    </table>;
  }
}
