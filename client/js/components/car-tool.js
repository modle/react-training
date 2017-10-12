/* eslint react/prop-types: 0 */
import * as React from 'react';
import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarFilter } from './car-filter';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: props.cars.concat(),
      fields: props.carFields.concat(),
      newMake: '',
      newModel: '',
      newYear: 0,
      newColor: '',
      newPrice: 0,
      editCarId: -1,
      sortField: '',
      sortAscending: true,
      filter: 'default filter',
    };
  }

  onChange = (e) => {
    this.setState({
      someValue: e.target.value,
      editCarId: -1,
    });
  };

  deleteCar = carId => {
    const carToDeleteIndex = this.state.cars.findIndex(car => car.id === carId);
    this.setState({
      cars: this.state.cars.slice(0, carToDeleteIndex).concat(this.state.cars.slice(carToDeleteIndex + 1)),
      editCarId: -1,
    });
  };

  editCar = carId => {
    this.setState({
      editCarId: carId,
    });
  };

  save = targetCar => {
    let targetIndex = this.state.cars.findIndex(car => car.id === targetCar.id);
    if (targetIndex === -1) {
      targetIndex = targetCar.id;
    }
    
    this.setState({
      cars: [
        ...this.state.cars.slice(0, targetIndex),
        targetCar,
        ...this.state.cars.slice(targetIndex + 1),
      ],
      editCarId: -1,
    });
  }

  cancelCarEdit = () => {
    this.setState({
      editCarId: -1,
    });
  };

  sort = sortField => {
    let sortAscending = this.state.sortAscending;
    sortAscending = (this.state.sortField === sortField ? !sortAscending : true);
    this.setState({
      sortField: sortField,
      sortAscending: sortAscending,
    });
  }

  render() {
    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarFilter filter={this.state.filter} fields={this.state.fields} />
      <CarTable cars={this.state.cars}
        onDeleteCar={this.deleteCar}
        onEditCar={this.editCar}
        onSaveEditedCar={this.save}
        onCancelCarEdit={this.cancelCarEdit}
        editCarId={this.state.editCarId}
        onSort={this.sort}
        sortField={this.state.sortField}
        sortAscending={this.state.sortAscending}
        onSaveCar={this.save} />
    </div >;
  }
}
