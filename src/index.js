import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom'
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import Auth from './Auth';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li>
        <Link to='/auth'>auth</Link>
      </li>
      <li>
        <Link to='/dashboard'>dashboard</Link>
      </li>
    </ul>
    <Switch>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/auth' component={Auth}></Route>
      <Redirect to='/dashboard'></Redirect>
      {/* Switch 只渲染一个路由 如果上面都没匹配到 会重定向至 '/dashboard' */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
