# react-ant-pop-confirm
> Popup confirm for antd.

## install
```shell
npm install -S afeiship/react-ant-pop-confirm
```

## usage
1. import css
  ```scss
  @import "~react-ant-pop-confirm/style.scss";

  // customize your styles:
  $react-ant-pop-confirm-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-ant-pop-confirm/
