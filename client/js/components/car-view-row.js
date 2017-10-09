import * as React from 'react';

export class CarViewRow extends React.Component {

  render() {
    const car = this.props.car;

    return <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <button type="button" id="edit" onClick={() => this.props.onEditCar(this.props.car.id)}>Edit car</button>
      <button type="button" id="edit" onClick={() => this.props.onDeleteCar(this.props.car.id)}>Delete car</button>
    </tr>;
  }
}
