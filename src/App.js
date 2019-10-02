import React, { Component } from 'react';
import HydraAdmin  from '@api-platform/admin';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HydraAdmin entrypoint="https://demo.api-platform.com" />
    );
  }
}

export default App;
