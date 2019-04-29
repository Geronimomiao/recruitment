import React from 'react';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import Auth from './Auth';
import * as serviceWorker from './serviceWorker';

const Two = () => {
  return <h2>222222</h2>
}

const Three = () => {
  return <h2>33333</h2>
}

class Test extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return <h2>{this.props.match.params.location}</h2>
  }
}

ReactDOM.render(
    <BrowserRouter>
      <Route path='/' exact component={App}></Route>
      <Route path='/dashboard'  component={Dashboard}></Route>
      <Route path='/auth' component={Auth}></Route>
      <Route path='/three' component={Three}></Route>
    </BrowserRouter>,
  document.getElementById('root')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
