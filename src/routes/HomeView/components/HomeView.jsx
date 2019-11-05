import React, { Component } from 'react'

// Components
import { LogoSvg } from '_/components/Svg'

// Styles
import './HomeView.scss'

class HomeView extends Component {
  // = Handlers =======================================

  // = Getters ========================================

  // = Lifecycle ======================================

  render() {
    return (
      <div id="HomeView">
        <LogoSvg className="golisto-logo" />
      </div>
    )
  }
}

export default HomeView
