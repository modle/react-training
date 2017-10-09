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

  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars}
        onDeleteCar={this.deleteCar}
        onEditCar={this.editCar}
        onSaveEditedCar={this.save}
        onCancelCarEdit={this.cancelCarEdit}
        editCarId = {this.state.editCarId} />
      <br />
      <br />
      <CarForm cars={this.state.cars} onSaveCar={this.save} />
    </div >;
  }
}
