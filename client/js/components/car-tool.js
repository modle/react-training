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

  editCar = carId => {
    console.log("edit triggered");
  };
  

  deleteCar = carId => {
    console.log(carId.value);
    // delete the car
    const carToDeleteIndex = this.state.cars.findIndex(car => car.id === carId);
    console.log(carToDeleteIndex);
    this.setState({
      cars: this.state.cars.slice(0, carToDeleteIndex).concat(this.state.cars.slice(carToDeleteIndex + 1)),
    });
  };

  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} onEditCar={this.editCar} />
      <br />
      <br />
      <CarForm cars={this.state.cars} onSaveCar={this.saveCar} />
    </div >;
  }

}
