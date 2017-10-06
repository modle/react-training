import * as React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newColorName: '',
      newColorHexCode: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  // [e.target.name] is a computed property
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.hexCode]: e.target.value,
    });
  }

  render() {
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.props.colors.map(color => <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-name-input">New Color Name:</label>
          <input type="text" id="new-color-name-input" name="newColorName"
            value={this.state.newColorName} onChange={this.onChange} />
        </div >
        <div>
          <label htmlFor="new-hex-code-input">New Hex Code:</label>
          <input type="text" id="new-hex-code-input" name="newHexCode"
            value={this.state.newHexCode} onChange={this.onChange} />
        </div >
      </form>
    </div>;
  }

}
