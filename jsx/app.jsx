import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/app.scss';

class App extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
