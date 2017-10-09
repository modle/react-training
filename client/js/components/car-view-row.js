import * as React from 'react';

export class CarViewRow extends React.Component {

  delete = () => {
    console.log(this.props.car.id);
    this.props.onDeleteCar(
      this.props.car.id
    );
  };

  editCar = () => {
    this.props.onEditCar(this.props.car.id);
  };

  render() {
    const car = this.props.car;

    return <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <button type="button" id="edit" onClick={this.editCar}>Edit car</button>
      <button type="button" id="delete" onClick={this.delete}>Delete car</button>
    </tr>;
  }
}
