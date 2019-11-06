import React, { Component } from 'react'

// Components
import { Route } from 'react-router-dom'

// Layouts
import { CoreLayout } from '_/layouts/CoreLayout'

// Views
import { HomeView } from './HomeView'

class Routes extends Component {
  // = Handlers =======================================

  // = Getters ========================================

  // = Lifecycle ======================================

  render() {
    return (
      <>
        <CoreLayout>
          <Route component={HomeView} path="/" exact />
        </CoreLayout>
      </>
    )
  }
}

export default Routes
