import * as React from 'react';
import { ToolHeader } from './tool-header';

export class ColorTool extends React.Component {

  // add colors to the state so they can be mutated
  // .concat() and .slice() both create a (shallow) copy
  // JSON.parse(JSON.stringify(props.colors)) will create a ('deep') copy
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors.concat(),
      newColorName: '',
      newColorHexCode: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.hexCode]: e.target.value,
    });
  }

  onClick = () => {
    // get the next Id
    const nextId = Math.max(...this.state.colors.map(c => c.id)) + 1;
    // create the color object from the current state
    const color = {
      id: nextId,
      name: this.state.newColorName,
      hexCode: this.state.newColorHexCode,
    };

    // add objects immutably; create a new array with concat
    this.setState({
      colors: this.state.colors.concat(color),
      newColorName: '',
      newColorHexCode: '',
    });
  }

  render() {
    return <div>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {this.state.colors.map(color => <li key={color.id}>{color.name + ': ' + color.hexCode}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-name-input">New Color Name:</label>
          <input type="text" id="new-color-name-input" name="newColorName"
            value={this.state.newColorName} onChange={this.onChange} />
        </div >
        <div>
          <label htmlFor="new-hex-code-input">New Hex Code:</label>
          <input type="color" id="new-hex-code-input" name="newColorHexCode"
            value={this.state.newColorHexCode} onChange={this.onChange} />
        </div >
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }
}
