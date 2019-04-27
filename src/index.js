import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { counter, addGUN, removeGUN } from './index.redux'

const store = createStore(counter)

const render = () => {
  ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN} />, document.getElementById('root'));
}
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
