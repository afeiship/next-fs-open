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
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntPopConfirm from 'react-ant-pop-confirm';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactAntPopConfirm />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-pop-confirm/