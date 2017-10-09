import * as React from 'react';

export class CarRow extends React.Component {

  onClick = () => {
    console.log(this.props.car.id);
    this.props.onDeleteCar(
      this.props.car.id
    );
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
      <button type="button" onClick={this.onClick}>Delete car</button>
    </tr>;
  }
}
