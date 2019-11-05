import React, { Component } from 'react'

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
