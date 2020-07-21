import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MaterialDatepicker from 'https://webcomponents.dev/web_modules/0a2xaEAioI1taZd2S3J3';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <MaterialDatepicker>Test</MaterialDatepicker>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
