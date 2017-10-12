/* eslint react/prop-types: 0 */
import * as React from 'react';

export class CarEditRow extends React.Component {
  
  constructor(props) {
    super(props);

    const car = this.props.car;

    this.state = {
      id: car.id,
      make: car.make,
      model: car.model,
      year: car.year,
      color: car.color,
      price: car.price,
    };

  }

  save = () => {
    const car = {
      id: this.state.id,
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      price: this.state.price
    };
    this.props.onSaveEditedCar(car);
  }

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  render() {
    const car = this.props.car;

    return <tr>
      <td>{car.id}</td>
      <td>
        <input type="text" id="edit-car-make-input" name="make" value={this.state.make}
          onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-car-model-input" name="model" value={this.state.model}
          onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-car-year-input" name="year" value={this.state.year}
          onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-car-color-input" name="color" value={this.state.color}
          onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-car-price-input" name="price" value={this.state.price}
          onChange={this.onChange} />
      </td>
      <button type="button" id="save" onClick={this.save}>Save</button>
      <button type="button" onClick={() => this.props.onCancelCarEdit(this.props.car.id)}>Cancel</button>
    </tr>;
  }
}
