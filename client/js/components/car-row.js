import * as React from 'react';

export class CarRow extends React.Component {

  delete = () => {
    console.log(this.props.car.id);
    this.props.onDeleteCar(
      this.props.car.id
    );
  };

  edit = () => {
    console.log(this.props.car.id);
    this.props.onEditCar(
      this.props.car.id
    );
  };

  render() {
    const car = this.props.car;

    if (car.edit) {

      return <tr>
        <td>
          <input type="text" id="edit-car-make-input" name="editCarMake"
            value={this.state.editCarMake} onChange={this.onChange} />
        </td>
        <td>
          <input type="text" id="edit-car-model-input" name="editCarModel"
            value={this.state.editCarModel} onChange={this.onChange} />
        </td>
        <td>
          <input type="number" id="edit-car-year-input" name="editCarYear"
            value={this.state.editCarYear} onChange={this.onChange} />
        </td>
        <td>
          <input type="text" id="edit-car-color-input" name="editCarColor"
            value={this.state.editCarColor} onChange={this.onChange} />
        </td>
        <td>
          <input type="number" id="edit-car-price-input" name="editCarPrice"
            value={this.state.editCarPrice} onChange={this.onChange} />
        </td>
        <button type="button" id="save" onClick={this.save}>Save car</button>
      </tr>;
    } else {
      return <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <button type="button" id="edit" onClick={this.edit}>Edit car</button>
        <button type="button" id="delete" onClick={this.delete}>Delete car</button>
      </tr>;
    }
  }
}
