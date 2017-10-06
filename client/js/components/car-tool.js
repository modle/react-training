import * as React from 'react';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: props.cars.concat(),
      newMake: '',
      newModel: '',
      newColor: '',
    };

  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClick = () => {
    const nextId = Math.max(...this.state.cars.map(c => c.id)) + 1;
    const car = {
      id: nextId,
      make: this.state.newCarMake,
      model: this.state.newCarModel,
      color: this.state.newCarColor,
    };

    // add objects immutably; create a new array with concat
    this.setState({
      cars: this.state.cars.concat(car),
      newCarMake: '',
      newCarModel: '',
      newCarColor: '',
    });
  }


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
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.cars.map(
              car => <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.color}</td>
              </tr>
            )
          }
        </tbody>
      </table >
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
          <label htmlFor="new-car-color-input">Color:</label>
          <input type="text" id="new-car-color-input" name="newCarColor"
            value={this.state.newCarColor} onChange={this.onChange} />
        </div >
        <button type="button" onClick={this.onClick}>Add Car</button>
      </form>

    </div >;
  }

}
