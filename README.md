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

## resouces
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] Add: source.map file for dist(`you can upload for production debug`).
- [ ] BUG: npm run dev will clean dist.
