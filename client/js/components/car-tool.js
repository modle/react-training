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
      editMake: '',
      editModel: '',
      editYear: 0,
      editColor: '',
      editPrice: '',
    };
  }

  onChange = (e) => {
    this.setState({
      someValue: e.target.value,
    });
  };

  saveCar = car => {
    this.setState({
      cars: this.state.cars.concat(car),
    });
  }

  flipEditCarFlag = updateCar => {
    console.log('get the car and flip the edit flag');
    const carToUpdateIndex = this.state.cars.findIndex(car => car.id === updateCar.id);
    console.log(carToUpdateIndex);
    this.setState({
      cars: [
        ...this.state.cars.slice(0, carToUpdateIndex),
        updateCar,
        ...this.state.cars.slice(carToUpdateIndex + 1),
      ]
    });
  };

  saveEditedCar = updateCar => {
    const carToUpdateIndex = this.state.cars.findIndex(car => car.id === updateCar.id);
    this.setState({
      cars: [
        ...this.state.cars.slice(0, carToUpdateIndex),
        updateCar,
        ...this.state.cars.slice(carToUpdateIndex + 1),
      ]
    });
  };

  deleteCar = carId => {
    console.log(carId.value);
    // delete the car
    const carToDeleteIndex = this.state.cars.findIndex(car => car.id === carId);
    this.setState({
      cars: this.state.cars.slice(0, carToDeleteIndex).concat(this.state.cars.slice(carToDeleteIndex + 1)),
    });
  };

  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} onFlipEditFlag={this.flipEditCarFlag} onSaveEditedCar={this.saveEditedCar} />
      <br />
      <br />
      <CarForm cars={this.state.cars} onSaveCar={this.saveCar} />
    </div >;
  }

}
