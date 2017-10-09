import * as React from 'react';

export class CarRow extends React.Component {

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

    const car = {
      id: this.props.car.id,
      make: this.props.car.editMake,
      model: this.props.car.editModel,
      year: this.props.car.editYear,
      color: this.props.car.editColor,
      price: this.props.car.editPrice,
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
          <input type="text" id="edit-car-make-input" name="editMake"
            defaultValue={car.make} onChange={this.onChange} />
        </td>
        <td>
          <input type="text" id="edit-car-model-input" name="editModel"
            defaultValue={car.model} onChange={this.onChange} />
        </td>
        <td>
          <input type="number" id="edit-car-year-input" name="editYear"
            defaultValue={car.year} onChange={this.onChange} />
        </td>
        <td>
          <input type="text" id="edit-car-color-input" name="editColor"
            defaultValue={car.color} onChange={this.onChange} />
        </td>
        <td>
          <input type="number" id="edit-car-price-input" name="editPrice"
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
