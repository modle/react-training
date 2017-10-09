import * as React from 'react';
import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: props.cars.concat(),
      newMake: '',
      newModel: '',
      newYear: 0,
      newColor: '',
      newPrice: 0,
      editCarId: -1,
    };
  }

  onChange = (e) => {
    this.setState({
      someValue: e.target.value,
      editCarId: -1,
    });
  };

  saveCar = car => {
    this.setState({
      cars: this.state.cars.concat(car),
      editCarId: -1,
    });
  }

  deleteCar = carId => {
    console.log(carId.value);
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

  saveEditedCar = updateCar => {
    const carToUpdateIndex = this.state.cars.findIndex(car => car.id === updateCar.id);
    this.setState({
      cars: [
        ...this.state.cars.slice(0, carToUpdateIndex),
        updateCar,
        ...this.state.cars.slice(carToUpdateIndex + 1),
      ],
      editCarId: -1,
    });
  }

  cancelCarEdit = () => {
    this.setState({
      editCarId: -1,
    });
  };

  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars}
        onDeleteCar={this.deleteCar}
        onEditCar={this.editCar}
        onSaveEditedCar={this.saveEditedCar}
        onCancelCarEdit={this.cancelCarEdit}
        editCarId = {this.state.editCarId} />
      <br />
      <br />
      <CarForm cars={this.state.cars} onSaveCar={this.saveCar} />
    </div >;
  }
}
