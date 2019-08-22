import ReactAntPopConfirm from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactAntPopConfirm children="删除"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
