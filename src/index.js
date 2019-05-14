import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from './routes'
import * as serviceWorker from './serviceWorker'



ReactDOM.render(
  <Router>
    <Routes></Routes>
  </Router>,
  document.getElementById('root')
)


serviceWorker.unregister()
