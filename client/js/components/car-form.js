import * as React from 'react';

export class CarForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      newMake: '',
      newModel: '',
      newYear: 0,
      newColor: '',
      newPrice: 0,
    };

  }

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  save = () => {
    const nextId = Math.max(...this.props.cars.map(c => c.id)) + 1;

    const car = {
      id: nextId,
      make: this.state.newCarMake,
      model: this.state.newCarModel,
      year: this.state.newCarYear,
      color: this.state.newCarColor,
      price: this.state.newCarPrice,
    };

    this.props.onSaveCar(car);

    this.setState({
      newCarMake: '',
      newCarModel: '',
      newCarYear: 0,
      newCarColor: '',
      newCarPrice: 0,
    });
  }

  render() {

    return <form>
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
      <button type="button" onClick={this.save}>Add Car</button>
    </form>;
  }
}