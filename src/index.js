import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { counter } from './index.redux'

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {
  }
))

// const render = () => {
//   ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN}
//                        addGunAsync={addGunAsync}/>, document.getElementById('root'));
// }
// render()
// store.subscribe(render)


ReactDOM.render(
  (<Provider store={store}>
    <App/>
  </Provider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
