import * as React from 'react';
import * as ReactDOM from 'react-dom';

// why braces? Preference.
//   Don't have to put default behind export in component definition
//   static analysis 'tree-shaking' is made easier by using named imports and exports
//     it lets you exclude stuff you don't need
//   using default means you can't be sure what's being exported and not
//     easier to be explicit with { Component }
import { ColorTool } from './components/color-tool';

// finds the main element and adds the ColorTool element
ReactDOM.render(React.createElement(ColorTool), document.querySelector('main'));
