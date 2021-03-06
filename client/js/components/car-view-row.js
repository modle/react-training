/* eslint react/prop-types: 0 */
import * as React from 'react';

export const CarViewRow = props =><tr>
  <td>{props.car.id}</td>
  <td>{props.car.make}</td>
  <td>{props.car.model}</td>
  <td>{props.car.year}</td>
  <td>{props.car.color}</td>
  <td>{props.car.price}</td>
  <button type="button" id="edit" onClick={() => props.onEditCar(props.car.id)}>Edit car</button>
  <button type="button" id="delete" onClick={() => props.onDeleteCar(props.car.id)}>Delete car</button>
</tr>;
