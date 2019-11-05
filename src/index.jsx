import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

// Styles
import './index.scss'

ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById('Root')
)
