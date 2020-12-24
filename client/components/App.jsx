import React from 'react';
import Preview from './preview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPopUp: false,
      singUpPopUp: false,
      imgurPopUp: false,
      previewPopUp: false
    };
  }





  render() {
    return (
      <div>
        <h1>Hi, Welcome!</h1>
        <div>This will soon be gifLauncher!</div>
      </div>
    );
  }
};

export default App;

