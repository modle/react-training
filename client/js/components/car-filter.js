/* eslint react/prop-types: 0 */
import * as React from 'react';

export class CarFilter extends React.Component {

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  render() {
    // console.log(this.props.fields);
    return <div>
      <select options={this.props.fields} value={this.props.filter} placeholder={this.props.filter} onChange={this.onChange}>{this.props.fields}</select>
      <input type="text" id="car-filter-input" name="carFilter"
        value={this.props.filter} onChange={this.onChange} />
      <button type="button" onClick={this.onFilter}>Filter</button>
    </div>;
  }
}
