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
        <div id="CoreLayout__Header">
          <nav id="NavBar"></nav>
        </div>
        <div id="CoreLayout__Content">{this.children}</div>
      </div>
    )
  }
}

export default CoreLayout
