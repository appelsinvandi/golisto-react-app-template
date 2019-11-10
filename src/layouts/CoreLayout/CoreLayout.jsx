import React, { Component } from 'react'

// Styles
import './CoreLayout.scss'

class CoreLayout extends Component {
  // = Handlers =======================================

  // = Getters ========================================

  get children() {
    return this.props.children
  }

  // = Lifecycle ======================================

  render() {
    return (
      <div id="CoreLayout">
        <div id="CoreLayoutHeader">
          <nav id="NavBar"></nav>
        </div>
        <div id="CoreLayoutContent">{this.children}</div>
      </div>
    )
  }
}

export default CoreLayout
