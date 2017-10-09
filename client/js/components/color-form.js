import * as React from 'react';

export class ColorForm extends React.Component {

  constructor(props) {
    super(props);
    // this state tracks the form fields
    this.state = {
      colorName: '',
      colorHexCode: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.hexCode]: e.target.value,
    });
  };

  onClick = () => {
    // invoke passed-in function
    this.props.onSaveColor({
      name: this.state.colorName,
      hexCode: this.state.colorHexCode,
    });

    this.setState({
      newColorName: '',
      newColorHexCode: '',
    });    
  };

  render() {
    return <form>
      <div>
        <label htmlFor="color-name-input">New Color Name:</label>
        <input type="text" id="color-name-input" name="colorName"
          value={this.state.colorName} onChange={this.onChange} />
      </div >
      <div>
        <label htmlFor="hex-code-input">New Hex Code:</label>
        <input type="color" id="hex-code-input" name="colorHexCode"
          value={this.state.colorHexCode} onChange={this.onChange} />
      </div >
      <button type="button" onClick={this.onClick}>Add Color</button>
    </form>;
  }
}
