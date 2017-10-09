import * as React from 'react';
import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';

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
      [e.target.name]: e.target.value,
    });
  }

  onClick = () => {
    const nextId = Math.max(...this.state.cars.map(c => c.id)) + 1;
    console.log(nextId);
    const car = {
      id: nextId,
      make: this.state.newCarMake,
      model: this.state.newCarModel,
      year: this.state.newCarYear,
      color: this.state.newCarColor,
      price: this.state.newCarPrice,
    };

    // add objects immutably; create a new array with concat
    this.setState({
      cars: this.state.cars.concat(car),
      newCarMake: '',
      newCarModel: '',
      newCarYear: 0,
      newCarColor: '',
      newCarPrice: 0,
    });
  }

  deleteCar = carId => {
    console.log(carId.value);
    // delete the car
    const carToDeleteIndex = this.state.cars.findIndex(car => car.id === carId);
    console.log(carToDeleteIndex);
    this.setState({
      cars: this.state.cars.slice(0, carToDeleteIndex).concat(this.state.cars.slice(carToDeleteIndex + 1)),
    });
  };

  // cars: this.state.cars.slice(0, carToDeleteIndex).concat(this.state.cars.slice(carToDeleteIndex + 1)),
  // cars: this.state.cars.filter(item => item.id !== carToDeleteIndex),
  
  render() {

    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar}/>
      <br />
      <br />
      <form>
        <div>
          <label htmlFor="new-car-make-input">Make:</label>
          <input type="text" id="new-car-make-input" name="newCarMake"
            value={this.state.newCarMake} onChange={this.onChange} />
        </div >
        <div>
          <label htmlFor="new-car-model-input">Model:</label>
          <input type="text" id="new-car-model-input" name="newCarModel"
            value={this.state.newCarModel} onChange={this.onChange} />
        </div >
        <div>
          <label htmlFor="new-car-year-input">Year:</label>
          <input type="number" id="new-car-year-input" name="newCarYear"
            value={this.state.newCarYear} onChange={this.onChange} />
        </div >
        <div>
          <label htmlFor="new-car-color-input">Color:</label>
          <input type="text" id="new-car-color-input" name="newCarColor"
            value={this.state.newCarColor} onChange={this.onChange} />
        </div >
        <div>
          <label htmlFor="new-car-price-input">Price:</label>
          <input type="number" id="new-car-price-input" name="newCarPrice"
            value={this.state.newCarPrice} onChange={this.onChange} />
        </div >
        <button type="button" onClick={this.onClick}>Add Car</button>
      </form>

    </div >;
  }

}
