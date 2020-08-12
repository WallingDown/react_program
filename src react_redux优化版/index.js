import React from 'react';
import ReactDOM from 'react-dom';
// 引入Store
import store from './redux/store'
//引入Provider，给所有App的子组件提供：store
import {Provider} from 'react-redux'
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


