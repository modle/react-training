import * as React from 'react';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newId: 0,
      newMake: '',
      newModel: '',
      newColor: '',
    };

  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      [e.target.make]: e.target.value,
      [e.target.model]: e.target.value,
      [e.target.color]: e.target.value,
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
            this.props.cars.map(
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
      <form>
        <div>
          <label htmlFor="new-car-id-input">Id:</label>
          <input type="text" id="new-car-id-input" name="newCarId"
            value={this.state.newCarId} onChange={this.onChange} />
        </div >
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
      </form>

    </div >;
  }

}
