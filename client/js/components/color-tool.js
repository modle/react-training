import * as React from 'react';
import { ToolHeader } from './tool-header';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);
    // this state tracks colors array
    this.state = {
      colors: props.colors.concat(),
      newColorName: '',
      newColorHexCode: '',
    };
  }

  // receives the color
  addNewColor = color => {
    const nextId = Math.max(...this.state.colors.map(c => c.id)) + 1;
    color.id = nextId;

    this.setState({
      colors: this.state.colors.concat(color),
    });
  }

  // pass this.addNewColor to ColorForm
  render() {
    return <div>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {this.state.colors.map(color => <li key={color.id}>{color.name + ': ' + color.hexCode}</li>)}
      </ul>
      <ColorForm onSaveColor={this.addNewColor} />
    </div>;
  }
}
