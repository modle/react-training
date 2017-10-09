import * as React from 'react';

export class CarRow extends React.Component {

  
  constructor(props) {
    super(props);

    const car = this.props.car;

    this.state = {
      make: car.make,
      model: car.model,
      year: car.year,
      color: car.color,
      price: car.price,
    };

  }

  delete = () => {
    console.log(this.props.car.id);
    this.props.onDeleteCar(
      this.props.car.id
    );
  };

  flipEditFlag = () => {
    console.log(this.props.car.id);
    this.props.onFlipEditFlag(
      this.props.car.id
    );
  };

  save = () => {

    console.log(this.props.car.id);
    console.log(this.state);

    const car = {
      id: this.props.car.id,
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      price: this.state.price,
      edit: false,
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

    if (car.edit) {
      return <tr>
        <td>{car.id}</td>
        <td>
          <input type="text" id="edit-car-make-input" name="make" value={this.state.make}
            defaultValue={car.make} onChange={this.onChange} />
        </td>
        <td>
          <input type="text" id="edit-car-model-input" name="model" value={this.state.model}
            defaultValue={car.model} onChange={this.onChange} />
        </td>
        <td>
          <input type="number" id="edit-car-year-input" name="year" value={this.state.year}
            defaultValue={car.year} onChange={this.onChange} />
        </td>
        <td>
          <input type="text" id="edit-car-color-input" name="color" value={this.state.color}
            defaultValue={car.color} onChange={this.onChange} />
        </td>
        <td>
          <input type="number" id="edit-car-price-input" name="price" value={this.state.price}
            defaultValue={car.price} onChange={this.onChange} />
        </td>
        <button type="button" id="save" onClick={this.save}>Save</button>
        <button type="button" id="flipEditFlag" onClick={this.flipEditFlag}>Cancel</button>
      </tr>;
    } else {
      return <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <button type="button" id="edit" onClick={this.flipEditFlag}>Edit car</button>
        <button type="button" id="delete" onClick={this.delete}>Delete car</button>
      </tr>;
    }
  }
}
